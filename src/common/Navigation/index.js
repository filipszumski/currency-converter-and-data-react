import React from "react";
import { Link } from "react-router-dom";
import { toConverter } from "../../routes";

export const Navigation = () => (
    <nav>
        <nav>
            <ul>
                <li>
                    <Link to={toConverter()}>Kalkulator Walut</Link>
                </li>
            </ul>
        </nav>
    </nav>

)
