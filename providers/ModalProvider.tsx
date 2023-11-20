"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/Components/AuthModal";
import UploadModal from "@/Components/UploadModal";
import SubscribeModal from "@/Components/SubscribeModal";
import { ProductWithPrice } from "@/types";

interface ModalProviderProps {
    products: ProductWithPrice[];
}

const ModalProvider: React.FC<ModalProviderProps> = ({
    products
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) {
        return null;
    }

    return ( 
        <>
            <AuthModal />
            <UploadModal />
            <SubscribeModal products={products} />
        </>
    );
}

export default ModalProvider;