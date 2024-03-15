import axios from "axios";

export async function getUsers(
  data: filtersDataProps
): Promise<UserProps[] | undefined> {
  try {
    const response = await axios.get<UserProps[]>(
      `/api/users/${data.filter}-${data.value}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
