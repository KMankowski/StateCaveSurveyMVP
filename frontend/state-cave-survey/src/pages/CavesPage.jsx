import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

import { fetchCaves } from "../api/caves";
import CaveCard from "../components/custom/CaveCard";

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
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(28rem,100%),1fr))] gap-6">
      {data.content.map((cave) => (
        <li key={cave.id}>
          <CaveCard cave={cave} />
        </li>
      ))}
    </ul>
  );
}
