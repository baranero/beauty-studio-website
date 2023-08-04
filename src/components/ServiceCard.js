import { useEffect, useState } from "react";

const ServiceCard = () => {

    const [serviceData, setServiceData] = useState([]);
    const [selectedObject, setSelectedObject] = useState(null);

    const handleItemClick = (id) => {
        // Find the object that matches the clicked id
        const clickedObject = serviceData.find((obj) => obj.id === id);
        setSelectedObject(clickedObject);
      };

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await fetch(
          "https://serwer2213418.home.pl/autoinstalator/wordpress/wp-json/wp/v2/posts"
        );
        const data = await response.json();

        const formattedData = data.map((post) => ({
          id: post.id,
          title: post.title.rendered,
          description: removeHtmlTags(post.excerpt.rendered),
          img: getFeaturedImage(post.content.rendered),
        }));
        setServiceData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const removeHtmlTags = (htmlString) => {
      const doc = new DOMParser().parseFromString(htmlString, "text/html");
      return doc.body.textContent || "";
    };

    const getFeaturedImage = (content) => {
      const imgRegExp = /<img.*?src="(.*?)"/;
      const match = content.match(imgRegExp);
      return match ? match[1] : "";
    };

    fetchServiceData();
  }, []);

  console.log(serviceData);

    return (
        <div className="bg-[#343A56]">
            <ul className="text-center">
                {serviceData.map((item) => {
                    return <li className="hover:cursor-pointer hover:text-[#fff]" key={item.id} onClick={() => handleItemClick(item.id)}>{item.title}</li>
                })}
            </ul>
{selectedObject && (<div>
                <img src={selectedObject.img} alt={selectedObject.title}/>
                <p>{selectedObject.description}</p>
            </div>)}
        </div>
    )
}

export default ServiceCard