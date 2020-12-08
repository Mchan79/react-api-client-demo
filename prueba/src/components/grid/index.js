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
    return (
        <div>

            <table className="table table-striped">
                <tbody>
                {data.map((item, i) => (
                    <tr>
                        <th scope="row" key={item.id}>
                                        {item.id}
                        </th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.body}</td>
                    </tr>
                ))}

                </tbody>

            </table>
        </div>
    );
};

export default Grid;