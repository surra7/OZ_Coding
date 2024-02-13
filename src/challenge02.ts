// 비동기 처리를 위한 제네릭 API 핸들러 클래스 구현

// 인터페이스 정의
interface MyApiHandler<T>{
    fetchData(endpoint: string): Promise<T>
}

// 클래스 정의
class ApiHandler<T> implements MyApiHandler<T>{
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    // base url (ex. https://api.somdomain.com)
    // endpoint (ex. /users, /posts, /profiles)
    // base url에 endpoint를 이어붙이는 형식

    async fetchData(endpoint: string): Promise<T>{
        try {
            const url = this.baseUrl + endpoint;
            const response = await fetch(url);
            
            // 오류 발생했을 경우
            if (!response.ok) {
                throw new Error(`${response.status}`)
            }

            const data: T = await response.json();

            return data;
        } catch (error) {
            throw new Error(`에러 발생: ${error}`);
        }
    }
}

type Post = {
    id: number;
    userId: number;
    title: string;
    body: string;
}

// 메인 함수
async function main() {
    const baseUrl = 'https://jsonplaceholder.typicode.com'
    const apiHandler = new ApiHandler<Post[]>(baseUrl);

    try {
        // https://jsonplaceholder.typicode.com/posts
        const posts: Post[] = await apiHandler.fetchData("/posts");

        posts.forEach((post) => console.log(post));
    } catch (error) {
        console.log(error);
    }
}

main();