import React, { useEffect, useState } from "react";
import "../../styles/Loading.scss";

const Loading = () => {
    const [morphText, setMorphText] = useState("Bạn là người mệnh");
    const morphWords = ["Bạn là người mệnh", "Cũng có thể là", "Và có thể là", "Hoặc là mệnh"];

    useEffect(() => {
        const interval = setInterval(() => {
            const randomWord = morphWords[Math.floor(Math.random() * morphWords.length)];
            setMorphText(randomWord);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="loading-container">
            <div className="loader">
                <div className="type-writer">
                    <span className="type-writer-text">{morphText}</span>
                </div>
                <div className="words">
                    <span className="word">Thủy</span>
                    <span className="word">Hỏa</span>
                    <span className="word">Thổ</span>
                    <span className="word">Mộc</span>
                    <span className="word">Kim</span>
                </div>
            </div>
        </div>

    )
}

const CircleLoading = () => {
    return (
        <div style={{
            zIndex: 1500,
            width: '100%',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="circleloader">
                <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    fillRule="evenodd"
                    fill="none"
                    strokeWidth="1"
                    stroke="none"
                >
                    <line y2="6" x2="24" y1="2" x1="24"></line>
                    <line
                        transform="translate(34, 6.679) rotate(30) translate(-34, -6.679)"
                        y2="8.679"
                        x2="34"
                        y1="4.679"
                        x1="34"
                    ></line>
                    <line
                        transform="translate(41.321, 14) rotate(60) translate(-41.321, -14)"
                        y2="16"
                        x2="41.321"
                        y1="12"
                        x1="41.321"
                    ></line>
                    <line
                        transform="translate(44, 24) rotate(90) translate(-44, -24)"
                        y2="26"
                        x2="44"
                        y1="22"
                        x1="44"
                    ></line>
                    <line
                        transform="translate(41.321, 34) rotate(120) translate(-41.321, -34)"
                        y2="36"
                        x2="41.321"
                        y1="32"
                        x1="41.321"
                    ></line>
                    <line
                        transform="translate(34, 41.321) rotate(150) translate(-34, -41.321)"
                        y2="43.321"
                        x2="34"
                        y1="39.321"
                        x1="34"
                    ></line>
                    <line
                        transform="translate(24, 44) rotate(180) translate(-24, -44)"
                        y2="46"
                        x2="24"
                        y1="42"
                        x1="24"
                    ></line>
                    <line
                        transform="translate(14, 41.321) rotate(210) translate(-14, -41.321)"
                        y2="43.321"
                        x2="14"
                        y1="39.321"
                        x1="14"
                    ></line>
                    <line
                        transform="translate(6.679, 34) rotate(240) translate(-6.679, -34)"
                        y2="36"
                        x2="6.679"
                        y1="32"
                        x1="6.679"
                    ></line>
                    <line
                        transform="translate(4, 24) rotate(270) translate(-4, -24)"
                        y2="26"
                        x2="4"
                        y1="22"
                        x1="4"
                    ></line>
                    <line
                        transform="translate(6.679, 14) rotate(300) translate(-6.679, -14)"
                        y2="16"
                        x2="6.679"
                        y1="12"
                        x1="6.679"
                    ></line>
                    <line
                        transform="translate(14, 6.679) rotate(330) translate(-14, -6.679)"
                        y2="8.679"
                        x2="14"
                        y1="4.679"
                        x1="14"
                    ></line>
                </g>
            </svg>
            <p>Đang tải...</p>
        </div>
    )
}

export { Loading, CircleLoading };