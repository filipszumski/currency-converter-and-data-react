import React from "react";
import { Paragraph } from "../styled";

const Result = ({ result }) => (
    <Paragraph result>
        {!!result && (
            <>
                {result.amountPossessed.toFixed(2)}&nbsp;{result.possessedCurrency}&nbsp;=&nbsp;
                <strong>{result.amountRecived.toFixed(2)}&nbsp;{result.wantedCurrency}</strong>
            </>
        )}
    </Paragraph>
);

export { Result };