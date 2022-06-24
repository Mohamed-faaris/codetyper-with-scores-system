import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { Gist } from "./useGistQuery";

export const useGistsQuery = (username: string) => {
  const queryClient = useQueryClient();

  const fetchGists = async (username: string) => {
    const { data } = await axios.get<Gist[]>(
      `https://api.github.com/users/${username}/gists`
    );
    return data;
  };

  return useQuery(["gists", username], () => fetchGists(username), {
    enabled: username !== "",
    staleTime: Infinity,
    onSuccess: (gists) => {
      for (const gist of gists) {
        queryClient.setQueryData(["gist", gist.id], gist);
      }
    },
  });
};
