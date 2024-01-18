"use Client";

import Link from "next/link";

const GitHubUsersPage = async () => {
  const users = await fetchGitHubUsers();
  console.log(users, "console");
  return (
    <div className="mt-4 p-2">
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-slate-100 text-slate-800 text-xl">
            <tr>
              <th>Name</th>
              <th>URL</th>
              <th>Repos</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img alt="profile image" src={user.avatar_url} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.login}</div>

                      <div className="text-sm opacity-50">{user.id}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <Link href={user.html_url} className="btn btn-link">
                    View on GitHub
                  </Link>
                </td>
                <Link
                  href={`/githubusers/${user.login}`}
                  className="btn btn-link"
                >
                  Go to Repos
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default GitHubUsersPage;

async function fetchGitHubUsers() {
  const res = await fetch("https://api.github.com/search/users?q=greg");
  const json = await res.json();
  return json.items;
}
