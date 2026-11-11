import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

import { fetchCaves } from "../api/caves";

const cavesQueryOptions = queryOptions({
  queryKey: ["caves"],
  queryFn: fetchCaves,
});

export function cavesLoader(queryClient) {
  return queryClient.query(cavesQueryOptions);
}

export default function CavesPage() {
  const { data } = useSuspenseQuery(cavesQueryOptions);

  return (
    <ul>
      {data.content.map((cave) => (
        <li key={cave.id}>{cave.name}</li>
      ))}
    </ul>
  );
}
