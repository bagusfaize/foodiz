import { useState } from 'react';

export const useViewCart = () => {
    const [isCartOpen, setIsCartOpen] = useState(true);
    
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }

    return {
        isCartOpen,
        toggleCart
    }
}