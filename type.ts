/* eslint-disable @typescript-eslint/no-explicit-any */
type Review = {
    reviewerName : string;
    rating: number;
    comment: string;
    reviewerEmail: string;
};

export interface ProductType {
    availabilityStatus: string;
    brand: string;
    category: string;
    description: string;
    dimensions: {
        depth: number;
        height: number;
        width: number;
    };
    discountPercentage: number;
    id: number; 
    images: string[];
    meta: {
        createAt: string;
        updatedAt: string;
        barcode: string;
        qrCode: string;
    }
    minimumOrderQuarntity: number;
    price: number;
    rating: number;
    returnPolicy: string;
    reviews: Review[];
    shippingInformation: string;
    sku: string;
    stock: number;
    tags: string[];
    thumbnail: string;
    title: string;
    warrantyInformation: string;
    weight: number;
    quantity?: number;
}

export interface StateType {
    nahid: {
        cart: ProductType[];
        favorite: ProductType[];
        userInfo: any;
    };
}