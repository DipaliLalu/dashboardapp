import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoMdCreate } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsBoxArrowUpRight } from "react-icons/bs";

function Card({ curEle, onDelete }) {
    const [showPopup, setShowPopup] = useState(false);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const handleClick = () => {
        setShowPopup((prev) => !prev);
    };

    const handleDeleteClick = () => {
        setShowDeletePopup(true);
    };

    const handleDeleteConfirm = () => {
        onDelete(curEle);
        setShowDeletePopup(false);
    };

    const handleDeleteCancel = () => {
        setShowDeletePopup(false);
    };

    const navigate = useNavigate();

    const handleEditClick = () => {
        navigate("/editform", { state: { data: curEle } });
    };

    const handleViewClick = () => {
        navigate("/viewpage", { state: { data: curEle } });
    };

    return (
        <div className="w-full rounded-2xl p-5 dark:bg-gray-800 flex justify-between md:flex-row relative shadow-2xl flex-col-reverse gap-3">
            <div className="flex flex-col gap-2 lg:w-2/3 w-full">
                <div className="font-semibold uppercase">{curEle.title}</div>
                <div className="truncate lg:w-3/4 w-full">{curEle.description}</div>
                <div>{curEle.taglist.join(" , ")}</div>
                <div className="cursor-pointer">
                    <BsThreeDots size={25} onClick={handleClick} />
                </div>
            </div>
            <div>
                <img
                    src={curEle.fileupload}
                    alt={curEle.title}
                    className="w-44 h-36 object-cover rounded-lg"
                />
            </div>
            {showPopup && (
                <div className="flex items-center justify-center absolute w-30 dark:bg-slate-600 rounded-2xl left-14 backdrop-blur-sm shadow-lg dark:text-white">
                    <div className="py-2 px-2 backdrop-blur-sm w-full rounded-2xl flex flex-col">
                        <div
                            className="p-2 font-semibold cursor-pointer flex items-center gap-4 hover:bg-slate-500 rounded-lg"
                            onClick={handleViewClick}
                        >
                            <BsBoxArrowUpRight />
                            View
                        </div>
                        <div
                            className="p-2 font-semibold cursor-pointer flex items-center gap-4 hover:bg-slate-500 rounded-lg"
                            onClick={handleEditClick}
                        >
                            <IoMdCreate />
                            Edit
                        </div>
                        <div
                            className="p-2 font-semibold cursor-pointer flex items-center gap-4 hover:bg-slate-500 rounded-lg"
                            onClick={handleDeleteClick}
                        >
                            <RiDeleteBin5Fill />
                            Delete
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {showDeletePopup && (
                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-600 bg-opacity-50 flex items-center justify-center z-50 rounded-lg backdrop-blur-2xl flex-col p-5">
                    <h3 className="text-lg font-semibold mb-4 dark:text-white">
                        Are you sure you want to delete this blog?
                    </h3>
                    <div className="flex justify-end gap-4">
                        <button
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            onClick={handleDeleteConfirm}
                        >
                            Delete
                        </button>
                        <button
                            className="px-4 py-2 bg-gray-300 dark:bg-gray-500 rounded hover:bg-gray-400 dark:hover:bg-gray-600"
                            onClick={handleDeleteCancel}
                        >
                            Cancel
                        </button>
                        
                    </div>
                </div>
            )}
        </div>
    );
}

export default Card;
