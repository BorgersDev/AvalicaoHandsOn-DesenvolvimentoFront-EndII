export interface Missionary {
    id: number;
    name: string;
    role: string;
    country: string; 
    isFunded: boolean;
}

export interface Letter {
    id: number;
    title: string;
    date: string;
    contentPreview: string;
}


export const fetchMissionaries = (): Promise<Missionary[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Lucas Fernandes", role: "Evangelista", country: "BR", isFunded: true },
                { id: 2, name: "Sara Oliveira", role: "Educadora", country: "US", isFunded: false },
                { id: 3, name: "David Kim", role: "Médico", country: "KR", isFunded: true },
            ]);
        }, 1500);
    });
};

export const fetchLetters = (): Promise<Letter[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([]); 
        }, 1500);
    });
};
