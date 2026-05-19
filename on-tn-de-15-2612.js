// DỮ LIỆU ĐỀ ÔN THI SỐ 15 - IRIS MATH
window.quizData = window.quizData || {};

// ==========================================
// PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN (12 CÂU)
// ==========================================
window.quizData['on-tn-de-15-2612_p1'] = [
    {
        q: "Cho hình phẳng $D$ giới hạn bởi đường cong $y = \\mathrm{e}^x$, trục hoành và hai đường thẳng $x = 0, x = 1$. Thể tích khối tròn xoay tạo thành khi quay $D$ quanh trục $Ox$ bằng",
        options: [
            "$\\dfrac{\\pi(\\mathrm{e}-1)}{2}$",
            "$\\pi(\\mathrm{e}^2-1)$",
            "$\\dfrac{\\pi(\\mathrm{e}^2-1)}{2}$",
            "$\\dfrac{\\mathrm{e}^2-1}{2}$"
        ],
        answer: 2
    },
    {
        q: "Cho dãy số $(u_n)$ xác định bởi $u_1 = 1$ và $u_{n+1} = \\dfrac{1}{3}u_n$. Tổng của $10$ số hạng đầu tiên của dãy số là",
        options: [
            "$S_{10} = \\dfrac{3^{10}-1}{2 \\cdot 3^{10}}$",
            "$S_{10} = \\dfrac{3^{10}-1}{2 \\cdot 3^9}$",
            "$S_{10} = \\dfrac{3^{11}-1}{2 \\cdot 3^{10}}$",
            "$S_{10} = \\dfrac{1}{2}(1 - 3^{-10})$"
        ],
        answer: 1
    },
    {
        q: "Cho hàm số $f(x) = 3x^2 - 2x + \\cos x$. Tìm nguyên hàm $F(x)$ của hàm số thỏa mãn $F(0) = 5$.",
        options: [
            "$F(x) = x^3 - x^2 + \\sin x + 4$",
            "$F(x) = x^3 - x^2 + \\sin x + 5$",
            "$F(x) = x^3 - x^2 - \\sin x + 5$",
            "$F(x) = 6x - 2 - \\sin x + 7$"
        ],
        answer: 1
    },
    {
        q: "Trong không gian $Oxyz$, góc giữa mặt phẳng $(Oxz)$ và đường thẳng $Oy$ bằng",
        options: ["$0^{\\circ}$", "$45^{\\circ}$", "$60^{\\circ}$", "$90^{\\circ}$"],
        answer: 3
    },
    {
        q: "Cho tứ diện đều $ABCD$. Gọi $G$ là trọng tâm của tam giác $BCD$. Khẳng định nào sau đây là **sai**?",
        options: [
            "$\\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$",
            "$\\vec{AG} = \\vec{AB} + \\vec{AC} + \\vec{AD}$",
            "$\\vec{AB} + \\vec{AC} + \\vec{AD} = 3\\vec{AG}$",
            "$AG \\perp (BCD)$"
        ],
        answer: 1
    },
    {
        q: "Trong không gian $Oxyz$, cho mặt cầu $(S) \\colon x^2 + y^2 + z^2 - 2x + 4y - 2z - 3 = 0$ và điểm $A(1; 1; 1)$. Vị trí tương đối của điểm $A$ đối với mặt cầu $(S)$ là",
        options: [
            "$A$ là tâm của $(S)$",
            "$A$ nằm trong $(S)$",
            "$A$ nằm trên $(S)$",
            "$A$ nằm ngoài $(S)$"
        ],
        answer: 2 
    },
    {
        q: "Bảng sau thống kê thời gian sử dụng Internet (giờ/tuần) của $40$ người: <br><br> <table border='1' style='border-collapse:collapse; text-align:center; width:100%; max-width:400px; margin:10px 0;'><tr><td>Thời gian</td><td>$[0; 5)$</td><td>$[5; 10)$</td><td>$[10; 15)$</td><td>$[15; 20)$</td></tr><tr><td>Số người</td><td>$8$</td><td>$15$</td><td>$12$</td><td>$5$</td></tr></table> Phương sai của mẫu số liệu ghép nhóm này là (làm tròn đến hàng phần mười)",
        options: ["$22{,}5$", "$24{,}8$", "$19{,}6$", "$30{,}2$"],
        answer: 1
    },
    {
        q: "Hàm số nào dưới đây có đồ thị nhận trục tung làm tiệm cận đứng?",
        options: ["$y = \\mathrm{e}^x$", "$y = \\pi^x$", "$y = \\log_3 x$", "$y = x^2$"],
        answer: 2
    },
    {
        q: "Trong không gian $Oxyz$, cho mặt cầu $(S)$ có tâm $I(1; 0; -2)$ và tiếp xúc với mặt phẳng ${(P) \\colon x + 2y - 2z + 3 = 0}$. Bán kính $R$ của mặt cầu bằng",
        options: ["$R = 2$", "$R = \\dfrac{8}{3}$", "$R = 3$", "$R = \\dfrac{4}{3}$"],
        answer: 1
    },
    {
        q: "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ và có $\\displaystyle\\int\\limits_0^2 f(x) \\text{d}x = 3, \\displaystyle\\int\\limits_{0}^{5} f(x) \\text{d}x = 10$. Tính $I = \\displaystyle\\int\\limits_2^5 f(x) \\text{d}x$.",
        options: ["$I = 13$", "$I = 7$", "$I = -7$", "$I = 30$"],
        answer: 1
    },
    {
        q: "Viết phương trình tiếp tuyến của đồ thị hàm số $y = \\ln(2x-1)$ tại điểm có tung độ bằng $0$.",
        options: ["$y = 2x - 2$", "$y = 2x - 2$", "$y = x - 1$", "$y = 2x + 2$"],
        answer: 1
    },
    {
        q: "Với $a,b$ là các số thực thì giá trị tích phân $I = \\displaystyle\\int\\limits_0^b (3x^2 - 2ax - 1) \\text{d}x$ bằng",
        options: [
            "$b^3 - ba^2 - b$",
            "$b^3 + b^2a + b$",
            "$b^3 - b^2a - b$",
            "$3b^2 - 2ab - 1$"
        ],
        answer: 2
    }
];

// ==========================================
// PHẦN II: TRẮC NGHIỆM ĐÚNG SAI (4 CÂU)
// ==========================================
window.quizData['on-tn-de-15-2612_p2'] = [
    {
        q: "Cho hàm số $f(x) = \\tan \\left( x - \\dfrac{2\\pi}{3} \\right)$. Xét tính đúng sai của các mệnh đề sau:",
        sub_questions: [
            { text: "a) Đạo hàm của hàm số đã cho là $f'(x) = \\dfrac{1}{\\cos^2 \\left( x - \\dfrac{2\\pi}{3} \\right)}$", correct: true },
            { text: "b) Với $x=0$ thì $\\dfrac{\\sqrt{3}}{4} \\cdot f'(x) - f(x) = 0$", correct: true },
            { text: "c) Phương trình $f(x)=0$ có nghiệm âm lớn nhất là $-\\dfrac{\\pi}{3}$", correct: true },
            { text: "d) Giá trị lớn nhất của $\\dfrac{1}{f'(x)}$ trên miền xác định của nó bằng $1$", correct: true }
        ]
    },
    {
        q: "Xét một hệ trục tọa độ $Oxyz$ được cho sẵn, đơn vị trên mỗi trục là $dm$, mặt ngoài của một quả bóng được mô hình hóa bởi phương trình mặt cầu $(x-2)^2+(y+1)^2+(z+1)^2=6$, quả bóng nằm yên trên sàn nhà. Người ta nhìn thấy một tấm ván ngã xuống đè lên quả bóng, phần giao của tấm ván và sàn nhà là đường thẳng $d$ có phương trình $\\dfrac{x+2}{2}=\\dfrac{y+1}{-3}=\\dfrac{z}{1}$. Gọi $A$, $B$ lần lượt là hai tiếp điểm của tấm ván, sàn nhà với quả bóng và $I$ là tâm quả bóng. Xét tính đúng sai của các mệnh đề sau:",
        sub_questions: [
            { text: "a) Quả bóng có tâm $I(2;-1;-1)$ and bán kính $R=\\sqrt{6}$", correct: true },
            { text: "b) Khoảng cách từ tâm quả bóng đến đường thẳng $d$ bằng $2\\sqrt{6}$", correct: false },
            { text: "c) Nếu $\\cos\\widehat{AIB}$ bằng $\\dfrac{a}{b}$ (phân số tối giản) thì giá trị $a^2+b^2=82$", correct: true },
            { text: "d) Một con kiến bò từ vị trí $A$ đến vị trí $B$ trên quả bóng với tốc độ $2$ cm/s; thời gian ngắn nhất cho chuyến đi này là $21$ giây (làm tròn đến hàng đơn vị)", correct: true }
        ]
    },
    {
        q: "Ở nhiệt độ $37^{\\circ}C$, một phản ứng hóa học từ chất đầu $A$, chuyển hóa thành chất sản phẩm $B$ theo phương trình: $A \\to B$. Giả sử $y(x)$ là nồng độ chất $A$ (đơn vị $mol \\cdot L^{-1}$) tại thời điểm $x$ (giây), $y(x) > 0$ với $x \\ge 0$, thỏa mãn hệ thức: $y'(x) = -7 \\cdot 10^{-4} y(x)$ với $x \\ge 0$. Biết rằng tại $x = 0$, nồng độ (đầu) của $A$ là $0{,}05$ $mol \\cdot L^{-1}$. Xét hàm số $f(x) = \\ln y(x)$ với $x \\ge 0$. Xét tính đúng sai của các mệnh đề sau:",
        sub_questions: [
            { text: "a) $f'(x) = -7 \\cdot 10^{-4}$", correct: true },
            { text: "b) $f(x) = -7 \\cdot 10^{-4}x + \\ln(0{,}05)$", correct: true },
            { text: "c) $y(30) - y(15) = -6 \\cdot 10^{-4}$", correct: false },
            { text: "d) Nồng độ trung bình của chất $A$ từ thời điểm $15$ giây đến thời điểm $30$ giây xấp xỉ $0{,}05$", correct: true }
        ]
    },
    {
        q: "Một trường THPT có $11$ lớp $10$ từ 10A1 đến 10A11, mỗi lớp cử $2$ học sinh đi tham gia buổi họp của đoàn trường. Trong buổi họp ban tổ chức cần chọn ra $4$ học sinh từ $22$ học sinh của khối $10$ để phát biểu ý kiến. Xét tính đúng sai của các mệnh đề sau:",
        sub_questions: [
            { text: "a) Số cách chọn sao cho có đúng $2$ học sinh lớp 10A1 và $1$ học sinh lớp 10A2 là $38$ cách", correct: false },
            { text: "b) Xác suất chọn $4$ học sinh sao cho có đúng hai học sinh cùng một lớp xấp xỉ $0{,}54$", correct: false },
            { text: "c) Biết rằng trong $4$ học sinh được chọn có ít nhất một cặp học sinh cùng lớp, xác suất để có đúng hai cặp học sinh cùng lớp là $\\dfrac{1}{37}$", correct: true },
            { text: "d) Có hai trường $X$ và $Y$ cùng quy mô. Chọn ngẫu nhiên một trường và từ đó chọn ra một nhóm $4$ học sinh thấy có ít nhất một cặp cùng lớp, khi đó xác suất trường được chọn là trường $X$ xấp xỉ $0{,}358$", correct: true }
        ]
    }
];

// ==========================================
// PHẦN III: TRẮC NGHIỆM TRẢ LỜI NGẮN (6 CÂU)
// ==========================================
window.quizData['on-tn-de-15-2612_p3'] = [
    {
        q: "Có bao nhiêu hình chữ nhật ở hình vẽ dưới đây?",
        image:"images/2612OnTNDe15/2612OnTNDe15TLN1.png",
        answer: "90"
    },
    {
        q: "Kim tự tháp Memphis nằm tại bang Tennessee (Mỹ) có dạng của một hình chóp tứ giác đều với chiều cao $98\\text{ m}$ và cạnh đáy $180\\text{ m}$. Tính số đo góc nhị diện tạo bởi mặt bên và mặt đáy của kim tự tháp đó theo đơn vị độ (làm tròn kết quả đến hàng phần chục).",
        answer: "47.4"
    },
    {
        q: "Một hợp tác xã cần vận chuyển $3600$ kg sầu riêng trong $1$ mùa vụ. Hợp tác xã chia thành nhiều chuyến, mỗi chuyến chở $x$ kg ($1 \\le x \\le 3600$, $x \\in \\mathbb{N}^*$), và giả sử $x$ là ước của $3600$ để chia đều số chuyến. Chi phí cho mỗi chuyến gồm Phí xe cố định: $50$ nghìn đồng/chuyến và Phí bảo quản lạnh tỉ lệ theo tải: $0{,}005x^2$ (nghìn đồng/chuyến). Hỏi mỗi chuyến nên chở bao nhiêu kg để tổng chi phí là nhỏ nhất?",
        answer: "100"
    },
    {
        q: "Trong một trò chơi thực tế ảo $3\\text{D}$, không gian được thiết lập hệ tọa độ $Oxyz$. Một người chơi điều khiển nòng súng đặt tại vị trí $A(1;1;1)$ đang ngắm bắn các mục tiêu thuộc mặt cầu $(S)\\colon x^2+y^2+z^2-10x-6y-8z+14=0$. Nếu người chơi bắn trúng hai mục tiêu $B$, $C$ cùng lúc (dây cung $BC$) thì số điểm của người chơi được tính bằng cách lấy phần nguyên của độ dài $BC$ rồi nhân với $10$. Nếu người chơi bắn theo phương của vectơ $\\vec{u}=(1;1;2)$ thì điểm số thu được bằng bao nhiêu?",
        image:"images/2612OnTNDe15/2612OnTNDe15TLN4.png",
        answer: "110"
    },
    {
        q: "Một cái hồ có dạng hình vuông $ABCD$ với cạnh bằng $200$ m, mặt hồ có thể chia ra làm hai phần: một phần hoàn toàn là mặt nước, phần còn lại là cỏ lau được giới hạn bởi tam giác $BCF$ với $F$ là trung điểm $CD$. Một chiếc thuyền xuất phát từ vị trí $E$ là trung điểm $AB$ để đến vị trí $C$. Khi thuyền đi trong vùng nước, nó có vận tốc $v_1 = 100$ m/phút. Khi thuyền đi trong vùng toàn cỏ lau thì có vận tốc $v_2 = 80$ m/phút. Hỏi thời gian ngắn nhất để thuyền đi từ $E$ đến $C$ là bao nhiêu phút (làm tròn đến hàng phần trăm)?",
        image:"images/2612OnTNDe15/2612OnTNDe15TLN5.png",
        answer: "2.51"
    },
    {
        q: "Cho một hình bát giác đều có tám đỉnh $A$, $B$, $C$, $D$, $E$, $F$, $G$, $H$. Người ta gắn ngẫu nhiên vào $8$ đỉnh này $8$ số tự nhiên $1$; $2$; $3$; $4$; $5$; $6$; $7$; $8$ (mỗi số gắn đúng một đỉnh). Chọn ngẫu nhiên một tam giác có $3$ đỉnh lấy từ $8$ đỉnh của bát giác đã cho. Gọi $CC$ là xác suất để thu được một tam giác vuông với ba số trên ba đỉnh của tam giác đó lập thành một cấp số cộng. Biết xác suất $P = \\dfrac{m}{n}$ (phân số tối giản). Hãy tính $m+3n$.",
        image:"images/2612OnTNDe15/2612OnTNDe15TLN6.png",
        answer: "303"
    }
];