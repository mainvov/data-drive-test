
export interface CartManageService {
    addItem(item: CartAddItemRequest): Promise<CartItem>
}

export interface CartItem {
    id: number;
    name: string;
    price: number;
}

export interface CartAddItemRequest {
    name: string;
    price: number;
}