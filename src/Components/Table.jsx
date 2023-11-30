import React from 'react'
export const Table = ({data}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Sold</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e) => {
                        return (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.title}</td>
                                <td><p className='description'>{e.description} </p></td>
                                <td>{e.price}</td>
                                <td>{e.category}</td>
                                <td>{e.sold?"true":"false"}</td>
                                <td>{e.image}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
