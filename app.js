const ctx = document.getElementById("myChart").getContext("2d");

const gradient = ctx.createLinearGradient(0, 300, 0, 0);
gradient.addColorStop(0, "rgba(52, 202, 165, 0.10)"); // Starting color
gradient.addColorStop(1, "rgba(52, 202, 165, 0.9)"); // Ending color
var initialData = [6000, 19000, 3000, 29000, 9000, 45000, 9000, 20000, 31000, 5000, 30000, 23000];

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
    datasets: [
      {
        label: "",
        data: initialData,
        borderWidth: 0,
        hoverBackgroundColor: gradient,
        backgroundColor: "rgba(52, 202, 165, 0.10)",
        borderRadius: "20",
        borderColor: "#eaeaea",
      },
    ],
  },
  options: {
    responsive: true,
    animation: false,
    scales: {
      x: {
        ticks: {
          font: {
            size: "14px",
            family: "Plus Jakarta Sans",
            weight: 600,
            lineHeight: "22px",
            style: "normal",
          },
        },
        grid: {
          display: false,
        },
        border: {
          drawTicks: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          suggestedMax: 50000,
          suggestedMin: 5000,
          stepSize: 10000,
          font: {
            size: "12px",
            family: "Plus Jakarta Sans",
            weight: 600,
            lineHeight: "16px",
            style: "normal",
          },
          callback: function (value, index, values) {
            return value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
          },
        },
        grid: {
          color: "#eaeaea",
          drawTicks: false,
        },
        border: {
          color: "#eaeaea",
          drawTicks: false,
          dash: [5, 5],
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: "index",
        position: "average",
        yAlign: "bottom",

        callbacks: {
          title: function (tooltipItems) {
            return null;
          },
          label: function (context) {
            return "$" + context.parsed.y.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
          },
        },
        bodyFont: {
          size: 12, // customize the body font size
          family: "Inter", // customize the body font family
          style: "normal", // customize the body font style
          lineHeight: 1.4, // customize the body line height
          color: "#fff",
        },
        displayColors: false, // set to false to hide color boxes
        backgroundColor: "#090C2C",
        bodyColor: "#fff",
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  },
  title: {
    display: false,
  },
});

function toggleMode() {
  const body = document.body;
  var table = document.querySelector(".table");
  var sidebarBorder = document.querySelector(".sidebar-light-border");

  body.classList.toggle("dark-mode-bg");
  table.classList.toggle("dark-mode-bg-secondary2");
  sidebarBorder.classList.toggle("sidebar-dark-border");

  var primaryBg = document.querySelectorAll(".light-mode-bg-secondary");
  var primaryBg2 = document.querySelectorAll(".light-mode-bg-secondary2");
  var lighttextColor = document.querySelectorAll(".light-text-color-primary");
  var lighttextColor2 = document.querySelectorAll(".light-text-color-primary2");
  var lighttextColor3 = document.querySelectorAll(".light-text-color-primary3");
  var lighttextColor4 = document.querySelectorAll(".light-text-color-primary4");
  var btnthemeToggler = document.querySelectorAll(".theme-toggler-bg-light");
  var btnlightHover = document.querySelectorAll(".btn-light-hover");
  var linklightHover = document.querySelectorAll(".green-link-light-hover");
  var dateStroke = document.querySelectorAll(".date-stroke-light");
  var headerBorder = document.querySelectorAll(".header-border-light");

  function toggleClass(elements, className) {
    elements.forEach(function (element) {
      element.classList.toggle(className);
    });
  }

  toggleClass(primaryBg, "dark-mode-bg-secondary");
  toggleClass(primaryBg2, "dark-mode-bg-secondary2");
  toggleClass(lighttextColor, "dark-text-color-primary");
  toggleClass(lighttextColor2, "dark-text-color-primary");
  toggleClass(lighttextColor3, "dark-text-color-primary");
  toggleClass(lighttextColor4, "dark-text-color-primary");
  toggleClass(btnthemeToggler, "theme-toggler-bg-dark");
  toggleClass(btnlightHover, "btn-dark-hover");
  toggleClass(linklightHover, "green-link-dark-hover");
  toggleClass(dateStroke, "date-stroke-dark");
  toggleClass(headerBorder, "header-border-dark");

  // Store the current theme preference in local storage
  const isDarkMode = body.classList.contains("dark-mode-bg");
  localStorage.setItem("darkMode", isDarkMode.toString());
}

// Check if the theme is already set in local storage
const isDarkMode = localStorage.getItem("darkMode") === "true";

// Call the function on page load to set the initial theme based on the stored preference
if (isDarkMode) {
  toggleMode();
}

document.addEventListener("DOMContentLoaded", function () {
  // Add click event listener to each dropdown item
  document.querySelectorAll(".dropdown-item").forEach(function (item) {
    item.addEventListener("click", function () {
      // Get the selected value
      var selectedValue = this.getAttribute("data-value");

      // Set the button text to the selected value
      document.querySelector(".dropdown-toggle").innerText = this.innerText;

      // You can also apply additional styling or classes based on the selected value if needed
      // For example, you can remove/add classes to change the appearance
      // document.querySelector('.dropdown-toggle').classList.add('custom-class');

      console.log("Selected Value:", selectedValue);
    });
  });
});
