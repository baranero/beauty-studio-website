import { useEffect, useState } from "react";

const ServiceCard = () => {
  const [serviceData, setServiceData] = useState([]);
  const [selectedObject, setSelectedObject] = useState();

  const handleItemClick = (id) => {
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
        setSelectedObject(formattedData[0]);
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
    <div className="bg-[#343A56] lg:grid lg:grid-cols-7 mx-auto min-h-[65vh] items-center justify-self-center">
      <ul className="lg:text-right text-center lg:col-span-3 lg:w-1/2 justify-self-end my-auto lg:py-5">
        {serviceData.map((item) => {
          const isSelected = item.id === selectedObject?.id;

          return (
            <li
              className={`border-b border-[#FBF0B0] hover:cursor-pointer hover:transition-all duration-300 p-2 hover:bg-[#545e8b] ${
                isSelected ? "bg-[#545e8b] text-[#fff]" : ""
              }`}
              key={item.id}
              onClick={() => handleItemClick(item.id)}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
      {selectedObject && (
        <div className="lg:col-span-4 lg:py-8 py-2">
          <img
            className="lg:w-[30vw] lg:ml-20 lg:rounded-lg"
            src={selectedObject.img}
            alt={selectedObject.title}
          />
          <p className="lg:w-[30vw] mx-6 lg:ml-20 mt-6 text-justify">
            {selectedObject.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
