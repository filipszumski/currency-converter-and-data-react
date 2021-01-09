import React from "react";
import { StyledTable, Wrapper } from "./styled";

export const Table = ({ body }) => {

    return (
        <Wrapper>
            <StyledTable>
                <tbody>
                    {body}
                </tbody>
            </StyledTable>
        </Wrapper>
    )
};