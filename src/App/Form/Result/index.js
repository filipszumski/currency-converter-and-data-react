import React from "react";

const Result = ({ result }) => (
    <p className="form__paragraph form__paragraph--result">
        {!!result && (
            <>
                {result.amountPossessed.toFixed(2)}&nbsp;{result.possessedCurrency}&nbsp;=&nbsp;
                <strong>{result.amountRecived.toFixed(2)}&nbsp;{result.wantedCurrency}</strong>
            </>
        )}
    </p>
);

export { Result };