export const selectCategory = (category) => {
    console.log("Category selected : ", category.name);
    return {
        type: "CATEGORY_CLICKED",
        payload : category
    }
};