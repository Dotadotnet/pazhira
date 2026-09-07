"use client"
import { Crisp } from "crisp-sdk-web";
import ChatConfig from "./config";
import { useEffect } from "react";
import { useChat } from "./ChatContext";
import { useHash } from "@/utilities/hashContext";
import { useLocale } from "next-intl";
import language from "@/app/language";

function Chat() {
    const { hash, setHash } = useHash()
    const { statusChat, openChat, closeChat } = useChat();
    const lang = useLocale();
    const class_lang = new language(lang);
    const lang_now = class_lang.getInfo();
    useEffect(() => {
        Crisp.configure(ChatConfig.id,
            {
                locale: lang_now.lang
            });
        if (lang_now.dir == "rtl") {
            Crisp.setPosition("right");
        } else {
            Crisp.setPosition("left");
        }
        Crisp.setColorTheme("red");
        const savedTheme = localStorage.getItem("theme");
        Crisp.setColorTheme(savedTheme);
        // Crisp.setPosition("left");
        if (statusChat !== "loading") {
            if (hash == "chatOpen") {
                Crisp.chat.open();
                openChat()
            } else {
                Crisp.chat.close();
                closeChat()
            }
        }

        Crisp.chat.onChatClosed(() => {
            closeChat()
            if (hash == "chatOpen") {
                setHash("")
            }
        })


        Crisp.session.onLoaded(() => {
            if (hash == "chatOpen") {
                Crisp.chat.open();
                openChat()
            } else {
                Crisp.chat.close();
                closeChat()
            }
        })

    })



    let pollTimeout;
    let interval;
    pollTimeout = setTimeout(() => {
        let chat_button = document.querySelector("span.cc-157aw");
        let function_edite = () => {
            //span.cc-1gfkz
            let itemsShouldRemove = ["div[aria-relevant~='additions'] >  div[role~='button']", "span.cc-1gfkz", "div.cc-t250q--warn-reply", "div.cc-vk540", "div.cc-17wir", "div[role~=alert]", "div.cc-vk540", "div.cc-6jkfc", "span.cc-1wc4t--activity-metrics", "span.cc-167kp", "span.cc-k9dpy"]
            itemsShouldRemove.forEach(itemShouldRemove => {
                let selector = itemShouldRemove;
                let fatherEl = "";
                if (selector.includes(">")) {
                    let toArray = selector.split(">")
                    selector = toArray[1].trim();
                    fatherEl = toArray[0].trim();
                }
                document.querySelectorAll(selector).forEach(el => {
                    if (fatherEl) {
                        const parent = el.closest(fatherEl);
                        if (parent) parent.remove();
                    } else {
                        el.remove();
                    }
                });
            });


            let topInfo = document.querySelector("div.cc-1wrj8");
            let toolbarChat = document.querySelector("span.cc-q39b9");


            if (toolbarChat) {
                toolbarChat.style.cssText = "padding-bottom : 10px !important;";
            }
            if (topInfo) {
                topInfo.style.height = "95px";
                topInfo.style.padding = "20px"
            }
            let all_elements = document.querySelectorAll('div.cc-w7v18 *');
            all_elements.forEach(element => {
                element.style.cssText += 'font-family: iranyekan !important';
            });

        }

        if (document.querySelector('section.loader-div')) {
            document.querySelector('section.loader-div').remove()
        }

        interval = setInterval(() => {
            function_edite();
        }, 300);

    }, 500)

    return ("");
}

export default Chat;