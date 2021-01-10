import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TableCell, TableHeader, TableRow } from "../../styled";
import {
    getRates,
    selectBase,
    selectRatesForRank
} from "../../ratesSlice";

export const TableBody = ({ trend }) => {

    const dispatch = useDispatch();
    const base = useSelector(selectBase);
    const rates = useSelector(selectRatesForRank);
    const { ratesIncrease, ratesDecrease } = rates;

    useEffect(() => {
        dispatch(getRates());
    }, [dispatch, base]);

    return (
        <>
            <TableRow>
                <TableHeader scope="col">Waluta</TableHeader>
                <TableHeader scope="col">Różnica</TableHeader>
                <TableHeader scope="col">%</TableHeader>
            </TableRow>
            {trend === 'increase' ?
                ((ratesIncrease !== undefined && ratesIncrease.length > 0 && trend === "increase") && ratesIncrease.map((rate) => (
                    <TableRow key={rate[0]}>
                        <TableCell>{rate[0]}</TableCell>
                        <TableCell>{(rate[1] - rate[2]).toFixed(4)}</TableCell>
                        <TableCell>{rate[3].toFixed(4)}</TableCell>
                    </TableRow>
                ))) :
                ((ratesDecrease !== undefined && ratesDecrease.length > 0 && trend === "decrease") && ratesDecrease.map((rate) => (
                    <TableRow key={rate[0]}>
                        <TableCell>{rate[0]}</TableCell>
                        <TableCell>{(rate[1] - rate[2]).toFixed(4)}</TableCell>
                        <TableCell>{rate[3].toFixed(4)}</TableCell>
                    </TableRow>
                )))
            }
        </>
    )
};