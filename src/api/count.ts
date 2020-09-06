/**
 * Fetch the visitor count on a repository.
 * @param host The hostname of the service, e.g `github.com` or `gitlab.com`.
 * @param namespace The namespace of the user/group, e.g. `octocat` or `group/subgroup`.
 * @param repo The name of the repository, e.g. `octocat`.
 * @returns A promise that resolves the visitor count.
 */
export async function count (host: string, namespace: string, repo: string): Promise<number>
{
	const response = await fetch(`https://api.countapi.xyz/hit/${host}-${namespace.replace(/\//g, ".")}.${repo}/visits`);
	const visits = await response.json();
	return visits.value;
};
