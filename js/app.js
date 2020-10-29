"use strict"
let headerText = document.querySelector(".header__text");
let headerImage = document.querySelector(".header__info-image");
let navigation = document.querySelector(".navigation__links");
let logo = document.querySelector(".logo");
let advantages1 = document.querySelector(".card__item-1");
let advantages2 = document.querySelector(".card__item-2");
let advantages3 = document.querySelector(".card__item-3");
let advantages4 = document.querySelector(".advantages__info-text");
let advantages5 = document.querySelector(".animation__image");
let completedTasks = document.querySelectorAll(".task__item-completed");
let notCompletedTasks = document.querySelectorAll(".task__item-not-completed");
let emptyTasksCells = document.querySelectorAll(".task__item-drop-cell");
let tasksInfo = document.querySelector(".tasks__info");
let tasksCompletedAnim = document.querySelector(".tasks__list-completed");
let tasksNotCompletedAnim = document.querySelector(".tasks__list-not-completed");
let menuBurgerBtn = document.querySelector(".menu-burger");
let headerWrapperMenuNavigation = document.querySelector(".navigation-menu-mobile");
let menuMobile = document.querySelector(".menu__mobile");
let closeMenuBtn = document.querySelector(".menu-burger-close");
let carouselItems = document.querySelectorAll(".carousel__item");
let prevBtn = document.querySelector(".carousel__btn-prev");
let nextBtn = document.querySelector(".carousel__btn-next");
let pricingTitle = document.querySelector(".pricing__title");
let pricingTextColumns = document.querySelectorAll(".pricing__advantages");
let pricingPlansColumns = document.querySelectorAll(".pricing__column");
let html = document.getElementsByTagName("html")[0];
function activateHeaderSpaceBetweenAnimation([nav, logo, menuBtn]) {
        let headerElementsArr = [nav, logo];
    return window.addEventListener("load", function() {
            setTimeout(function() {
                return menuBtn.classList.add("animation-default");
            }, 510);
        return headerElementsArr.forEach((i) => {
            return i.classList.add("active-space-between-1");
        });
    });
};
activateHeaderSpaceBetweenAnimation([navigation, logo, menuBurgerBtn]);
function activateHeaderInfoAnimation(headTex, headImg) {
    return window.addEventListener("load", function() {
            headImg.style.opacity = "1";
        headImg.style.transform = "translate(0px, 0%)";
            headImg.style.transition = "all 0.8s ease 0s";
        return headTex.classList.add("active");
    });
};
activateHeaderInfoAnimation(headerText, headerImage);
function activateAdvantagesInfoAnimation([ad1, ad2, ad3, ad4, ad5]) {
    let advantagesArr1 = [ad1, ad2, ad3];
    const showAdvantages1 = () => {
        return advantagesArr1.forEach((i) => {
            return i.classList.add("active-space-between-2");
        });
    };
    let advantagesArr2 = [ad4, ad5];
    const showAdvantages2 = () => {
        return advantagesArr2.forEach((i) => {
            return i.classList.add("active-space-between-3");
        });
    };
    function showAdvantages() {
        window.addEventListener("scroll", function() {
            if (scrollY >= 458) {
                return showAdvantages1();   
            };
        });
        window.addEventListener("scroll", function() {
            if (scrollY >= 1058) {
                return showAdvantages2();   
            };
        });
    };
    return showAdvantages();
};
activateAdvantagesInfoAnimation([advantages1, advantages2, advantages3, advantages4, advantages5]);
function dragAndDrop([compTasks, notCompTasks, tasksCells]) {
    const dragOver = (e) => {
        return e.preventDefault();
    };
    const iterateAllTasks = () => {
        compTasks.forEach((i) => {
            return newCompTasksArr.push(i);
        });
            notCompTasks.forEach((i) => {
                return newNotCompTasksArr.push(i);
            });
        tasksCells.forEach((i) => {
            i.addEventListener("dragover", dragOver);
                return newTasksCells.push(i);
        });
    };
        let newCompTasksArr = [];
    let newNotCompTasksArr = [];
        let newTasksCells = [];
    iterateAllTasks();
        let [comp1, comp2] = newCompTasksArr;
    let [notComp1, notComp2, notComp3] = newNotCompTasksArr;
        let [cell1, cell2, cell3, cell4, cell5, cell6] = newTasksCells;
    let allCompletedAndNotCompletedTasksArr = [comp1, comp2, notComp1, notComp2, notComp3];
        let checkValue;
    let checkValueMobile;
        const dragAndDropForMobileDevices = () => {
            function touchStart(task, cell) {
                return task.classList.add("task__item-choosed-mobile");
            };
                notComp1.addEventListener("touchstart", function() {
                    touchStart(this, cell1);
                        return checkValueMobile = 1; 
                });
            notComp2.addEventListener("touchstart", function() {
                touchStart(this, cell2);
                    return checkValueMobile = 2; 
            });
                notComp3.addEventListener("touchstart", function() {
                    touchStart(this, cell3);
                        return checkValueMobile = 3; 
                });
            comp1.addEventListener("touchstart", function() {
                touchStart(this, cell4);
                    return checkValueMobile = 4; 
            });
                comp2.addEventListener("touchstart", function() {
                    touchStart(this, cell5);
                        return checkValueMobile = 5;
                });
            function touchStartForCells(cell, task) {
                task.classList.remove("task__item-choosed-mobile");
                    cell.classList.add("drop-cell-active-for-mobile");
                cell.style.paddingTop = "0";
                    cell.style.transition = "0s";
                return cell.append(task);
            };
            newTasksCells.forEach((i) => {
                i.addEventListener("touchstart", function() {
                    if (checkValueMobile === 1) {
                        cell1.classList.remove("not-active");
                            return touchStartForCells(this, notComp1);
                    };
                        if (checkValueMobile === 2) {
                            cell2.classList.remove("not-active");
                                return touchStartForCells(this, notComp2);
                        };
                    if (checkValueMobile === 3) {
                        cell3.classList.remove("not-active");
                            return touchStartForCells(this, notComp3);
                    };
                        if (checkValueMobile === 4) {
                            cell4.classList.remove("not-active");
                                return touchStartForCells(this, comp1);
                        };
                    if (checkValueMobile === 5) {
                        cell5.classList.remove("not-active");
                            return touchStartForCells(this, comp2);
                    };
                });
            });
        };
    dragAndDropForMobileDevices();
        const dragStartTasks = function() {
            const dragStart = function(task, cell) {
                setTimeout(() => {
                    task.classList.add("not-active");
                return cell.classList.remove("not-active");
            }, 0);
        };
        notComp1.addEventListener("dragstart", function() {
            dragStart(this, cell1);
                return checkValue = 1;
        });
            notComp2.addEventListener("dragstart", function() {
                dragStart(this, cell2);
                    return checkValue = 2;
            });
        notComp3.addEventListener("dragstart", function() {
            dragStart(this, cell3);
                return checkValue = 3;
        });
            comp1.addEventListener("dragstart", function() {
                dragStart(this, cell4);
                    return checkValue = 4;
            });
        comp2.addEventListener("dragstart", function() {
            dragStart(this, cell5);
                return checkValue = 5;
        });
    };
        dragStartTasks();     
    const dragEndTasks = function() {
        const dragEnd = function(cell, task) {
            cell.classList.add("not-active");
                return task.classList.remove("not-active");
        };
        allCompletedAndNotCompletedTasksArr.forEach((i) => {
            i.addEventListener("dragend", function() {
                const checkReturnValues = () => {
                    if (checkValue === 1) {
                        return dragEnd(cell1, notComp1);
                    };
                        if (checkValue === 2) {
                            return dragEnd(cell2, notComp2);
                        };
                    if (checkValue === 3) {
                        return dragEnd(cell3, notComp3);
                    };
                        if (checkValue === 4) {
                            return dragEnd(cell4, comp1);
                        };
                    if (checkValue === 5) {
                            return dragEnd(cell5, comp2);
                        };
                    };
                return checkReturnValues();
            });
        });
    };
        dragEndTasks();
    const dragDrop = function(cell, task) {
        cell.classList.add("drop-cell-active");
            cell.style.paddingTop = "0";
        cell.style.transition = "0s";
            return cell.append(task);
    };
    tasksCells.forEach((i) => {
        i.addEventListener("drop", function() {
            if (checkValue === 1) {
                cell1.classList.add("active");
                    return dragDrop(this, notComp1);
            };
                if (checkValue === 2) {
                    cell2.classList.add("active");
                        return dragDrop(this, notComp2);
                };
            if (checkValue === 3) {
                cell3.classList.add("active");
                    return dragDrop(this, notComp3);
            };
                if (checkValue === 4) {
                    cell4.classList.add("active");
                        return dragDrop(this, comp1);
                };
            if (checkValue === 5) {
                cell5.classList.add("active");
                    return dragDrop(this, comp2);
            };
        });
    });
};
dragAndDrop([completedTasks, notCompletedTasks, emptyTasksCells]);
function tasksAnimation([taskInf, taskCompAnim, taskNotCompAnim]) {
    const activateTasksAnimation = () => {
        taskInf.classList.remove("tasks-info-anim");
    taskInf.classList.add("active-space-between-3");
        taskCompAnim.classList.remove("tasks-comp-anim");
    taskCompAnim.classList.add("active-space-between-3");
        taskNotCompAnim.classList.remove("tasks-not-comp-anim");
    taskNotCompAnim.classList.add("active-space-between-3");
        };
    return window.addEventListener("scroll", function() {
        if (scrollY >= 2000) {
            return activateTasksAnimation();
        };
    });
};
tasksAnimation([tasksInfo, tasksCompletedAnim, tasksNotCompletedAnim]);
function menuBurger([menuBtn, headWrap, menu, closeBtn]) {
    const menuShowAndClose = () => {
        menuBtn.addEventListener("click", function() {
            headWrap.classList.add("menu-burger-active");
                html.style.overflow = "hidden";
            menu.style.display = "block";
        });
        closeBtn.addEventListener("click", function() {
            headWrap.classList.remove("menu-burger-active");
                html.style.overflow = "auto";
            menu.style.display = "none";
        });
    };
    return menuShowAndClose();
};   
menuBurger([menuBurgerBtn, headerWrapperMenuNavigation, menuMobile, closeMenuBtn]);
function pricingAnimation(price, title) {
    const activatePricingAnimation = () => {
        window.addEventListener("scroll", () => {
            if (scrollY >= 2700) {
                return title.classList.add("animation-default");
            };
        });
    return window.addEventListener("scroll", function() {
        if (scrollY >= 3150) {
            return price.forEach((i) => {
                    return i.classList.add("animation-default");
                });
            };
        });
    };
    return activatePricingAnimation();
};
pricingAnimation(pricingTextColumns, pricingTitle);
function pricingPlansAnimation(plans) {
    return window.addEventListener("scroll", function() {
        if (scrollY >= 3750) {
            return plans.forEach((i) => {
                i.classList.remove("plan-animation-bronze", "plan-animation-gold", "plan-animation-silver");
                return i.classList.add("active-space-between-3");
            });
        };
    });
};
pricingPlansAnimation(pricingPlansColumns);
function carousel([prev, next, slides]) {
    let index = 1;
        const activateCarousel = (x) => {
            if (x < 1) {
                index = slides.length;
            };
                if (x > slides.length){
                    index = 1;
                };
            slides.forEach((i) => {
                i.style.display = "none";
            });
                return slides[index - 1].style.display = "block";
        };
    activateCarousel(index);
        const addSlidesForCarousel = (x) => {
            return activateCarousel(index += x);
        };
    prev.addEventListener("click", () => {
        return addSlidesForCarousel(-1);
    });
        next.addEventListener("click", () => {
            return addSlidesForCarousel(1);
        });
};
carousel([prevBtn, nextBtn, carouselItems]);
