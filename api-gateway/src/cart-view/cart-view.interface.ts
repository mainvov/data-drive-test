
export interface CartViewService {
    getAllItems(item: {}): Promise<CartAllItemsResponse>
}

export interface CartAllItemsResponse {
    items: CartItem[]
}

export interface CartItem {
    id: number;
    name: string;
    price: number;
}
