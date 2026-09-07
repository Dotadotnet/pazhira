"use client";
import { BsChatTextFill } from "react-icons/bs";
import { BsChatText } from "react-icons/bs";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Spinner from "../Utils/Spinner";
import { useChat } from "./ChatContext";
import { Crisp } from "crisp-sdk-web";
import { useHash } from "@/utilities/hashContext";
import { HiMiniChatBubbleOvalLeft } from "react-icons/hi2";

function ChatCustomEvent({ className = "" }) {
    const { statusChat, openChat, closeChat } = useChat();
    const { hash, setHash } = useHash()





    return (
        <div
            onClick={() => {
                if (statusChat !== "loading") {
                    if (statusChat == "open") {
                        closeChat()
                        setHash("")
                    } else {
                        openChat()
                        setHash("chatOpen")
                    }
                }
            }}
            className="size-full flex justify-center items-center cursor-pointer" >
            <span>
                {statusChat == "loading" ? (
                    <Spinner className={className + " " + " scale-90 "} />
                ) : statusChat == "open" ? (
                    <IoClose className={className} />
                ) : (
                    <HiMiniChatBubbleOvalLeft className={className} />
                )}
            </span>
        </div>
    );
}

export default ChatCustomEvent;

// pages/_app.js
