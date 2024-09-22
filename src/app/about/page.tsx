
import Image from "next/image";
export default function About  () {
    return(
        <section className="about" id="about">
            
            <div className="text">
                <h1>About</h1>
                <p>
        Welcome to <b>RSK Food!</b> <br />At <b>RSK Food</b>, we believe that food is more than just a meal; it’s an experience. Our passion for culinary arts drives us to bring you the finest recipes, the most delicious meals, and the latest trends in the food world. Whether you’re a seasoned chef or just starting your culinary journey, we’ve got something for everyone.
        </p>
        <h2>
        Our Mission</h2>
        <p>
        To inspire and empower food lovers to explore new flavors, create mouth-watering dishes, and share the joy of cooking with their loved ones. We strive to be your go-to resource for all things food-related, from classic recipes to innovative cooking techniques.
        </p>
        <h2>
        Our Story</h2>
        <p>
        <b>RSK Food</b> was born out of a love for food and a desire to share that passion with the world. What started as a small blog has grown into a thriving community of food enthusiasts who come together to celebrate the art of cooking. Our team of experienced chefs, food bloggers, and culinary experts work tirelessly to bring you the best content, tips, and recipes.
        </p>
        <h2>
        What We Offer
        </h2>
        <p>
        Delicious Recipes: Discover a wide variety of recipes, from quick and easy weeknight dinners to gourmet meals for special occasions.
        Cooking Tips: Learn new cooking techniques and tips to take your culinary skills to the next level.
        Food Trends: Stay up-to-date with the latest trends in the food industry, from new ingredients to popular cooking methods.
        Community: Join our vibrant community of food lovers, share your recipes, and connect with others who share your passion.
        </p>
        <h2>
        Join Us</h2>
        <p>
        Whether you’re looking for inspiration for your next meal or wanting to improve your cooking skills, <b>RSK Food</b> is here to help. Join us on this delicious journey, and let’s make every meal a memorable one!
        </p>
            </div>
            <div className="image">
                <Image src="/images/OIP (1).jpeg" alt="" width={500} height={300}/>
                <Image className="img1" src="/images/OIF.jpeg" alt="" width={500} height={300}/>
                <Image className="img2" src="/images/th.jpeg" alt="" width={500} height={300}/>
            </div>
        </section>
            )
}

