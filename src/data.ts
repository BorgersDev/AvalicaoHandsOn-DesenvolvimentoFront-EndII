export interface Missionary {
    id: number;
    name: string;
    role: string;
    country: string; // Código ISO para bandeira
    isFunded: boolean;
}

export interface Letter {
    id: number;
    title: string;
    date: string;
    contentPreview: string;
}

// Função simulando um delay na API para testar Lazy Loading e Suspense
export const fetchMissionaries = (): Promise<Missionary[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Lucas Fernandes", role: "Evangelista", country: "BR", isFunded: true },
                { id: 2, name: "Sara Oliveira", role: "Educadora", country: "US", isFunded: false },
                { id: 3, name: "David Kim", role: "Médico", country: "KR", isFunded: true },
            ]);
        }, 1500); // 1.5 segundos de delay
    });
};

export const fetchLetters = (): Promise<Letter[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            // Retorna um array vazio para testar o estado vazio no LetterList
            resolve([]); 
        }, 1500);
    });
};
