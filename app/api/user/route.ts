import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt" 
import * as z from "zod"


//Define schema for input validation
const userSchema = z
  .object({
    firstName: z.string().min(1, "O nome é obrigatório"),
    lastName: z.string().min(1, "O apelido é obrigatório"),
    email: z.string().min(1, "O e-mail é obrigatório").email("Email inválido"),
    password: z
      .string()
      .min(1, "A palavra-passe é obrigatória")
      .min(8, "A palavra-passe deve ter 8 caracteres no mínimo")
      .max(16, "A palavra-passe deve der entre 8 a 16 caracteres"),
    role: z.string({
      required_error: "Please select a language.",
    }),
  })

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {firstName, lastName, email, role, password} = userSchema.parse(body);

        //check if user email already exists
        const existingUserByEmail = await db.user.findUnique({
            where: {
                email: email
            }
        });

        if(existingUserByEmail) {
            return NextResponse.json({ user: null, message: "Ja existe um usuario cadastrado com este email"}, {status: 409});
        }

        const hashedPassword = await hash(password, 10);

        const newUser = await db.user.create({
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                role: role,
                password: hashedPassword
            }
        })

        const {password: userPassword, ...rest} = newUser;

        return NextResponse.json({ user: rest, message: "Usuario criado com sucesso"}, {status: 201});
    } catch (error) {
        return NextResponse.json({ message: "Ocorreu um erro."}, {status: 500});
    }
}