// реализовать пагинацию на бэке
import React from "react";
import PropTypes from "prop-types";
import { Pagination } from "react-bootstrap";

const PostsPagination = ({
    handlePageChange,
    currentPage,
    pageNumbers,
    postsPerPage,
    sortedPosts,
}) => {
    return (
        <>
            <Pagination className="d-flex justify-content-center ">
                <Pagination.First
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                />
                <Pagination.Prev
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                />

                {pageNumbers.map((number) => (
                    <Pagination.Item
                        key={number}
                        active={number === currentPage}
                        onClick={() => handlePageChange(number)}
                    >
                        {number}
                    </Pagination.Item>
                ))}

                <Pagination.Next
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={
                        currentPage ===
                        Math.ceil(sortedPosts.length / postsPerPage)
                    }
                />

                <Pagination.Last
                    onClick={() =>
                        handlePageChange(
                            Math.ceil(sortedPosts.length / postsPerPage)
                        )
                    }
                    disabled={
                        currentPage ===
                        Math.ceil(sortedPosts.length / postsPerPage)
                    }
                />
            </Pagination>
        </>
    );
};
PostsPagination.propTypes = {
    handlePageChange: PropTypes.func,
    currentPage: PropTypes.number,
    pageNumbers: PropTypes.array,
    postsPerPage: PropTypes.number,
    sortedPosts: PropTypes.array,
};
export default PostsPagination;
