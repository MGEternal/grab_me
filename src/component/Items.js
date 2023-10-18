import React, { useEffect, useState } from 'react';
import './Items.css';

function Items() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://localhost:7155/api/posts')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>List of Items</h1>

      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        data.map((item) => (
          <div className="container-item">
            <p>ร้าน : {item.name}</p>
            <p>สิ่งที่ฝากซื้อ</p>
            <div className="item-count">
              <div>{item.item}</div>
              <div className="count">จำนวน {item.count} กล่อง</div>
            </div>
            <p>ร้านละเอียดเพิ่มเติม</p>
            <p>{item.detail}</p>
            <div className="group-order">
              <button className="btn-get">เราซื้อให้</button>
              <div className="ph_holder">testttttt tttt</div>
            </div>
          </div>
        ))
      ) : (
        <div className="container-nodata">No data available</div>
      )}
    </div>
  );
}

export default Items;
