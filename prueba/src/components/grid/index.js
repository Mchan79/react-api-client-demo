import React, { useEffect, useState, useMemo } from "react";
import axios from 'axios';

const Grid = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = () => {
            axios
                .get("https://jsonplaceholder.typicode.com/comments")
                .then((response => {
                    setData(response.data);
                    console.log(response.data);
                }))
                .catch((erro) => {
                    console.log(erro);
                });
        };

        getData();

    }, [])

    const filter = useMemo(() => {
        let datos = data;
        return datos;
    }, [data])

    return (
        <div>
            <ul>
                {filter.map((item, i) => (
                    <li key={i}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Grid;