async function fetchRepos(user) {
  const res = await fetch(`https://api.github.com/users/${user}/repos`, {
    next: {
      revalidate: 60,
    },
  });
  const json = await res.json();
  return json;
}

const Repos = async ({ user }) => {
  const repos = await fetchRepos(user);

  return (
    <div className="mt-4 p-2">
      <h1>{user}'s Repos</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Repo Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo) => (
              <tr key={repo.id}>
                <td>{repo.name}</td>
                <td>{repo.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Repos;
