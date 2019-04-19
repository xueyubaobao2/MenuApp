import React from "react";

const Detail = props => {
  return (
    <div>
      {props.short_name ? (
        <div className="detail">
          <h2>Items in Categoery:({props.short_name})</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {props.detail.map(item => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default Detail;
