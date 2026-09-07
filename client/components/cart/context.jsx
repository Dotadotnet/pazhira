// CartContext.js
"use client";
import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // وقتی کامپوننت لود شد، کوکی رو بخون
    useEffect(() => {
        const savedCart = Cookies.get('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    // وقتی سبد تغییر کرد، کوکی رو آپدیت کن
    useEffect(() => {
        Cookies.set('cart', JSON.stringify(cart), { expires: 7 }); // 7 روز اعتبار
    }, [cart]);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((i) => i.id === item.id);
            if (existingItem) {
                return prevCart.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };



    const updateFromCart = (id, update) => {
        const prevCart = cart;
        const key = Object.keys(update)[0];
        const value = update[key];
        prevCart[id][key] = value;
        setCart(prevCart);
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
