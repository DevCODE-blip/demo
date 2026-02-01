/* =========================
   Script: Album nhiều ảnh + thông tin mục đích CLB
   ========================= */

(() => {
  const clubs = {
    vannghe: {
      title: "CLB Văn Nghệ",
      desc: "Nơi hội tụ những bạn trẻ yêu ca hát, nhảy múa, biểu diễn và lan tỏa giá trị nghệ thuật trong học đường.",
      images: [
        "img/clbtvannghe/z7489323215895_b436b9fd6cc08789b5770f34ca13ff92.jpg",
        "img/clbtvannghe/z7489323216111_75eb3f01dd99eee9e0abf73ad99e8d1f.jpg",
      ],
      purpose: [
        "Phát hiện, bồi dưỡng năng khiếu (hát, múa, diễn xuất, nhạc cụ).",
        "Tạo sân chơi lành mạnh để học sinh tự tin thể hiện bản thân.",
        "Góp phần xây dựng đời sống tinh thần và văn hóa học đường tích cực.",
      ],
      activities: [
        "Tập luyện theo nhóm/tiết mục theo chủ đề tháng.",
        "Biểu diễn tại các sự kiện của trường (lễ kỷ niệm, ngoại khóa, chào cờ...).",
        "Tham gia giao lưu văn nghệ với các đơn vị/bạn trường khi có chương trình.",
      ],
    },

    tiepsuc: {
      title: "CLB Tiếp Sức Mùa Thi",
      desc: "Đồng hành cùng sĩ tử trong các kỳ thi, hỗ trợ tinh thần và tiếp thêm động lực vượt vũ môn.",
      images: [
        "img/clbtiepsucmt/z7489315535343_bd077e445315b5472d6cf863c4464da3.jpg",
        "img/clbtiepsucmt/z7489315535572_f59f92e4a2526d94d278736b1509a330.jpg",
        "img/clbtiepsucmt/z7489315540260_b1860e45dfe65489ea15bc3e1c2a3a8e.jpg",
      ],
      purpose: [
        "Hỗ trợ thí sinh và phụ huynh: hướng dẫn, tư vấn, cung cấp thông tin cần thiết.",
        "Rèn kỹ năng tình nguyện: giao tiếp, xử lý tình huống, làm việc nhóm.",
        "Lan tỏa tinh thần sẻ chia và trách nhiệm cộng đồng của học sinh.",
      ],
      activities: [
        "Hỗ trợ điểm thi: nước uống, bản đồ phòng thi, hướng dẫn di chuyển.",
        "Tư vấn nhanh: giấy tờ cần mang theo, quy định vào phòng thi.",
        "Đội hình trực trật tự, hỗ trợ khi có tình huống phát sinh.",
      ],
    },

    bongda: {
      title: "CLB Bóng Đá",
      desc: "Sân chơi thể thao lành mạnh, rèn luyện sức khỏe, tinh thần đồng đội và ý chí chiến thắng.",
      images: [
        "img/clbbongda/z7489335882775_f8f317e872c97a1645f1514e693148d7.jpg",
        "img/clbbongda/z7489335891304_3df636e36a6e30e6503f88dd00c24806.jpg",
        "img/clbbongda/z7489335899564_22426b5c102cd00ad4e2e0343b3412b0.jpg",
      ],
      purpose: [
        "Nâng cao thể lực, sức bền và tinh thần rèn luyện hằng ngày.",
        "Xây dựng tinh thần đồng đội, kỷ luật, thi đấu fair-play.",
        "Tuyển chọn lực lượng đại diện trường tham gia giải đấu trong/ngoài tỉnh.",
      ],
      activities: [
        "Tập kỹ thuật cơ bản, chiến thuật theo vị trí.",
        "Thi đấu giao hữu nội bộ theo khối/lớp.",
        "Tham gia các giải thể thao học sinh và phong trào Đoàn trường.",
      ],
    },

    hienmau: {
      title: "CLB Hiến Máu Nhân Đạo",
      desc: "Lan tỏa yêu thương, sẻ chia sự sống thông qua các chương trình hiến máu tình nguyện.",
      images: [
        "img/clbhienmau/z7489343097036_684e8f79b4942f2a52b10348b2f54e91.jpg",
        "img/clbhienmau/z7489343103077_e8ae05b5250cfca1cfc793291f36c5da.jpg",
        "img/clbhienmau/z7489343106359_817a8411b81e5c617d2e45e0ba78eac1.jpg",
        "img/clbhienmau/z7489343113358_4a42ca815a295e8603b9a9e7a69b5bd9.jpg",
      ],
      purpose: [
        "Nuôi dưỡng tinh thần nhân ái, trách nhiệm xã hội của học sinh.",
        "Nâng cao nhận thức về hiến máu nhân đạo và hiến máu an toàn.",
        "Kết nối nhà trường với các đơn vị y tế/đoàn thể để tổ chức hoạt động thiện nguyện.",
      ],
      activities: [
        "Truyền thông nâng cao nhận thức: poster, chia sẻ thông tin, talkshow.",
        "Hỗ trợ hậu cần các chương trình hiến máu (đón tiếp, hướng dẫn, tổng hợp).",
        "Tham gia các hoạt động thiện nguyện khác của trường/địa phương.",
      ],
    },
  };

  // Elements
  const modal = document.getElementById("clubModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalPurpose = document.getElementById("modalPurpose");
  const modalActivities = document.getElementById("modalActivities");
  const modalThumbs = document.getElementById("modalThumbs");
  const modalCounter = document.getElementById("modalCounter");
  const btnPrev = document.getElementById("btnPrev");
  const btnNext = document.getElementById("btnNext");

  let currentClubKey = null;
  let currentIndex = 0;

  // Helpers
  const qsAll = (sel, root = document) =>
    Array.from(root.querySelectorAll(sel));

  function setModalOpen(isOpen) {
    if (!modal) return;
    modal.classList.toggle("show", isOpen);
    modal.setAttribute("aria-hidden", (!isOpen).toString());
    document.body.style.overflow = isOpen ? "hidden" : "";
  }

  function renderList(ulEl, items) {
    ulEl.innerHTML = "";
    items.forEach((t) => {
      const li = document.createElement("li");
      li.textContent = t;
      ulEl.appendChild(li);
    });
  }

  function renderThumbs(images) {
    modalThumbs.innerHTML = "";
    images.forEach((src, idx) => {
      const btn = document.createElement("button");
      btn.className = "thumb" + (idx === currentIndex ? " active" : "");
      btn.type = "button";
      btn.setAttribute("aria-label", `Xem ảnh ${idx + 1}`);
      btn.addEventListener("click", () => setImage(idx));

      const img = document.createElement("img");
      img.src = src;
      img.alt = `Ảnh thu nhỏ ${idx + 1}`;
      img.loading = "lazy";

      btn.appendChild(img);
      modalThumbs.appendChild(btn);
    });
  }

  function updateCounter(total) {
    modalCounter.textContent = `${currentIndex + 1}/${total}`;
  }

  function setImage(idx) {
    const club = clubs[currentClubKey];
    if (!club) return;

    const total = club.images.length;
    currentIndex = (idx + total) % total;

    modalImage.src = club.images[currentIndex];
    modalImage.alt = `${club.title} – Ảnh ${currentIndex + 1}`;

    updateCounter(total);

    // update active thumb
    const thumbs = qsAll(".thumb", modalThumbs);
    thumbs.forEach((t, i) => t.classList.toggle("active", i === currentIndex));
  }

  function openClub(key) {
    const club = clubs[key];
    if (!club) return;

    currentClubKey = key;
    currentIndex = 0;

    modalTitle.textContent = club.title;
    modalDesc.textContent = club.desc;

    renderList(modalPurpose, club.purpose);
    renderList(modalActivities, club.activities);

    setModalOpen(true);

    // render gallery
    modalImage.src = club.images[0];
    modalImage.alt = `${club.title} – Ảnh 1`;
    renderThumbs(club.images);
    updateCounter(club.images.length);
  }

  function closeModal() {
    setModalOpen(false);
    currentClubKey = null;
    currentIndex = 0;
    modalImage.src = "";
    modalThumbs.innerHTML = "";
  }

  // Card click handlers
  qsAll(".content-box").forEach((card) => {
    const key = card.getAttribute("data-club");
    const open = () => openClub(key);

    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
  });

  // Modal close
  qsAll("[data-close='true']").forEach((el) =>
    el.addEventListener("click", closeModal),
  );

  // Modal navigation
  btnPrev?.addEventListener("click", () => setImage(currentIndex - 1));
  btnNext?.addEventListener("click", () => setImage(currentIndex + 1));

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    const isOpen = modal?.classList.contains("show");
    if (!isOpen) return;

    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") setImage(currentIndex - 1);
    if (e.key === "ArrowRight") setImage(currentIndex + 1);
  });

  // Scroll helpers
  const btnScrollClubs = document.getElementById("btnScrollClubs");
  const btnJoin = document.getElementById("btnJoin");
  const btnOpenRegister = document.getElementById("btnOpenRegister");
  const btnModalJoin = document.getElementById("btnModalJoin");
  const btnTop = document.getElementById("btnScrollTop");

  function scrollToEl(id) {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  btnScrollClubs?.addEventListener("click", () => scrollToEl("#clubs"));

  // A "giả lập" đăng ký: mở album CLB đầu tiên + hướng dẫn liên hệ
  function joinFlow() {
    showToast(
      "Đăng ký tham gia CLB: hãy liên hệ Văn phòng Đoàn trường hoặc xem mục Liên hệ bên dưới.",
    );
    scrollToEl("#contact");
  }

  btnJoin?.addEventListener("click", joinFlow);
  btnOpenRegister?.addEventListener("click", joinFlow);
  btnModalJoin?.addEventListener("click", joinFlow);

  // Scroll top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  btnTop?.addEventListener("click", scrollToTop);

  window.addEventListener("scroll", () => {
    const show = window.scrollY > 600;
    btnTop?.classList.toggle("show", show);
  });

  // Simple toast
  let toastTimer = null;
  function showToast(message) {
    let toast = document.getElementById("toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast";
      toast.style.position = "fixed";
      toast.style.left = "50%";
      toast.style.bottom = "20px";
      toast.style.transform = "translateX(-50%)";
      toast.style.background = "rgba(15,23,42,.92)";
      toast.style.color = "#fff";
      toast.style.padding = "12px 14px";
      toast.style.borderRadius = "14px";
      toast.style.maxWidth = "min(720px, calc(100% - 24px))";
      toast.style.boxShadow = "0 16px 40px rgba(0,0,0,.25)";
      toast.style.zIndex = "1000";
      toast.style.fontWeight = "700";
      toast.style.fontSize = "13px";
      toast.style.border = "1px solid rgba(255,255,255,.14)";
      toast.style.backdropFilter = "blur(6px)";
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.opacity = "1";

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.style.opacity = "0";
    }, 3200);
  }
})();
