
export interface RepoData {
    name: string,
    full_name: string,
    created_at: string,
    owner: UserData,
    url: string,
    language: string,
    commits_url: string,
    description: string,
    html_url: string,
    stargazers_count: number,

}

export interface UserData {
    login: string,
    avatar_url: string,
    repos_url: string,
    url: string,
    html_url: string
}
