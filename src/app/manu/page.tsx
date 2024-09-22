import React from 'react'
import Image from 'next/image'
export default function Manu  ()  {
  return (
    <>

    <section className="manu" id="manu-sec">
        
            <h1>Manu Card</h1>
        <div className="cards">
        <div className="div">
                <div className="card-img">
                <Image src="/images/biryani.png" alt="" width={500} height={300}/>
                </div>
                <div className="card-text">
                    <h3>Chicken Biryani</h3>
                    <h4>Rs. 330</h4>
                <p>Biryani loaded with spicy marinated chicken piece, caramelized onions & flavorful saffron rice</p>
                </div>
                <div className="button"><button>Order Now</button></div>
            </div>
            </div>
            <div className="cards">
            <div className="div">
                <div className="card-img">
                <Image src="/images/pulao.png" alt="" width={500} height={300}/>
                </div>
                <div className="card-text">
                    <h3>Beef Yakhni Pulao</h3>
                    <h4>Rs. 390</h4>
                <p>Pulao loaded with spicy marinated chicken piece, caramelized onions & flavorful saffron rice</p>
                </div>
                <div><button className="button">Order Now</button></div>
                </div>
            </div>
            <div className="cards">
            <div className="div">
                <div className="card-img">
                <Image width={500} height={300} src="/images/karhai.png" alt="" />
                </div>
                <div className="card-text">
                    <h3>Chicken Karahi</h3>
                    <h4>Rs. 350</h4>
                <p>Chicken Karahi loaded Lorem ipsum dolor sit amet.with spicy marinated chicken piece.</p>
                </div>
                <div><button className="button">Order Now</button></div>
            </div>
            </div>
            <div className="cards">
            <div className="div">
                <div className="card-img">
                <Image width={500} height={300} src="/images/haleem.png" alt="" />
                </div>
                <div className="card-text">
                    <h3>Haleem</h3>
                    <h4>Rs 180-plate</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, dignissimos.</p>
                </div>
                <div><button className="button">Order Now</button></div>
            </div>
            </div>
            <div className="cards">
            <div className="div">
                <div className="card-img">
                <Image width={500} height={300} src="/images/dalgosht.png" alt="" />
                </div>
                <div className="card-text">
                    <h3>Daal Gosht</h3>
                    <h4>Rs. 250</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae molestias iure autem.</p>
                </div>
                <div><button className="button">Order Now</button></div>
            </div>
            </div>
            <div className="cards">
            <div className="div">
                <div className="card-img">
                <Image width={500} height={300} src="/images/nehari.png" alt="" />
                </div>
                <div className="card-text">
                    <h3>Beef Nehari</h3>
                    <h4>Rs. 400</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit officia et culpa.</p>
                </div>
                <div><button className="button">Order Now</button></div>
            </div>
            </div>
            <div className="cards">
            <div className="div">
                <div className="card-img">
                <Image width={500} height={300} src="/images/seekhkabab.png" alt="" />
                </div>
                <div className="card-text">
                    <h3>Seekh Kabab</h3>
                    <h4>Rs. 480</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt reprehenderit sequi laudantium!</p>
                </div>
                <div><button className="button">Order Now</button></div>
            </div>
            </div>
            <div className="cards">
            <div className="div">
                <div className="card-img">
                <Image width={500} height={300} src="/images/malaiboti.png" alt="" />
                </div>
                <div className="card-text">
                    <h3>Malai Boti</h3>
                    <h4>Rs. 600</h4>
                <p>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit.consectetur adipisicing elit. Suscipit optio nam iste!</p>
                </div>
                <div><button className="button">Order Now</button></div>
            </div>
            </div>
            <div className="cards">
        <div className="div">
                <div className="card-img">
                <Image width={500} height={300} src="/images/roll.png" alt="" />
                </div>
                <div className="card-text">
                    <h3>Reshmi Kabab Roll</h3>
                    <h4>Rs. 280</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus dignissimos a ratione.</p>
                </div>
                <div><button className="button">Order Now</button></div>
            </div>
            </div>
            <div className="cards">
            <div className="div">
                <div className="card-img">
                <Image width={500} height={300} src="/images/chandan.png" alt="" />
                </div>
                <div className="card-text">
                    <h3>Chandan Kabab</h3>
                    <h4>Rs. 500</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque earum repellat nulla?</p>
                </div>
                <div><button className="button">Order Now</button></div>
            </div>
            </div>
    </section>
    </>
        )
}


