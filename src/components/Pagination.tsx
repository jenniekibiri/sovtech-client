import React, { useState } from "react";

import "./css/people.css";
type Props = {
    handlePageChanged: (page: number) => void;
    selectedPage: number;
};
export const Pagination = ({ handlePageChanged }: Props) => {
    const [clickedPage, setclickedPage] = useState(1);
    const count = 82;
    const pageItems = [];

    for (let page = 1; page < Math.round(count) / 9; page++) {
        pageItems.push(
            <li
                className={
                    clickedPage === page ? "page-item active" : "page-item"
                }
            >
                <a
                    href="/"
                    className="page-link"
                    onClick={(
                        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                    ) => {
                        setclickedPage(page);
                        event.preventDefault();
                        handlePageChanged(page);
                    }}
                >
                    {page}
                </a>
            </li>
        );
    }

    return (
        <ul className="pagination">
            <li className="page-item ">
                <a href="#/" className="page-link">
                    &lt;
                </a>
            </li>
            {pageItems}

            <li
                className={
                    clickedPage === Math.round(count) / 9
                        ? "page-item disabled "
                        : "page-item "
                }
            >
                <a href="#/" className="page-link">
                    &gt;
                </a>
            </li>
        </ul>
    );
};
