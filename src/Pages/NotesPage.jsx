import React from "react";
import { FaRegThumbsUp, FaRegCommentAlt } from "react-icons/fa";

const NotesPage = () => {
  return (
    <>
      <div className="p-4">
        <div className="w-full bg-[white] h-min py-2 px-4 border-[2px]">
          <div className="flex w-full h-20 justify-between items-center">
            <h1 className="text-sm text-[#000000c6]">Title - Chapter 1</h1>
            <div className="flex items-center gap-2">
              <div className="bg-[url('https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80')] w-6 h-6 bg-cover bg-center rounded-full"></div>
              <h3 className=" text-[#000000a1] text-sm">Rahul Kumar</h3>
            </div>
          </div>
          <p className="text-start font-[100] text-[#616161ca]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            deserunt asperiores inventore a qui laudantium dicta error quod
            aliquam neque natus odio, soluta, aut at ex sequi aliquid, iusto
            explicabo? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Distinctio id quisquam labore dolorum. Similique delectus quam
            recusandae voluptatum reiciendis? Enim eveniet alias voluptatem. Ea
            dignissimos fuga sunt. Sapiente inventore accusantium placeat
            assumenda ipsa unde dolorem necessitatibus fuga quae ea porro fugiat
            nisi sit odio earum cumque distinctio reiciendis sed atque vel
            deserunt, debitis vitae veniam et? Vero cum labore beatae recusandae
            maiores. Laboriosam optio minima amet est ea repellendus quaerat
            distinctio neque cumque earum illo veniam ad, iste id, in aspernatur
            magnam esse fugit, officiis deserunt! Unde odit velit dignissimos.
            Mollitia similique aspernatur ratione quia maiores hic vero maxime
            optio, nulla quis quam perferendis dignissimos ullam distinctio
            asperiores est, eos obcaecati quo rerum. Ipsa ratione officiis
            voluptatem ea, est doloribus distinctio nesciunt voluptatibus nulla
            enim deserunt, sed possimus molestiae ullam odio. Ratione molestias,
            vitae delectus sunt illum error labore ad accusantium quis obcaecati
            mollitia fugit? Nemo aut ea facere quisquam repellat, tempora sunt,
            animi repellendus earum cupiditate ab ullam at rem? Voluptatum quam
            voluptatem, molestias voluptate tempora animi provident est
            veritatis optio. Provident pariatur, quidem hic harum recusandae
            eligendi labore vero aspernatur consequatur? Facere sequi eos,
            doloremque error quia in facilis autem nesciunt repellat eveniet
            amet accusamus ipsum laudantium nemo.
          </p>
          {/* <hr className="w-full border border-[#868686] mt-8 h-[1px]" /> */}
          <div className="w-full border-solid border-[2px] mt-8"></div>

          <div className="flex gap-24 items-center mt-4">
            <div className="flex items-center gap-1">
              <FaRegThumbsUp className="text-4 font-[300] text-[#292929dd]"/>
              <p className="text-sm">Like</p>
            </div>

            <div className="flex items-center gap-1">
              <FaRegCommentAlt className="text-4 font-[300] text-[#292929dd]"/>
              <p className="text-sm">Comment</p>
            </div>
          </div>

          <div className="flex items-center mt-8">
            <div className="w-6 h-6 rounded-full z-30 bg-[url('https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80')]  bg-center bg-cover"></div>
            
            <div className="w-6 h-6 rounded-full z-20 ml-[-8px] bg-[url('https://images.unsplash.com/photo-1532660621034-fb55e2e59762?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80')] bg-center bg-cover"></div>

            <div className="w-6 h-6 rounded-full z-10 ml-[-8px] bg-[url('https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')] bg-center bg-cover"></div>

            <div className="w-6 h-6 rounded-full z-0 ml-[-8px] bg-[url('https://images.unsplash.com/photo-1536766820879-059fec98ec0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80')] bg-center bg-cover"></div>

            <h4 className="ml-5 text-[#454545] text-xs">Rahul Kumar and others</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotesPage;
