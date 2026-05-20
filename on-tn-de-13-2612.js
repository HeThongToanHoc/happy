// DỮ LIỆU ĐỀ 13 - THUỘC HỆ THỐNG IRIS MATH
window.quizData = window.quizData || {};

window.quizData['on-tn-de-13-2612_p1'] = [
    {
        q: "Cấp số cộng $\\left(u_n \\right)$ có $u_1=-1$ và $u_2=3$. Số hạng $u_5$ của cấp số cộng bằng",
        options: [
            "$15$",
            "$5$",
            "$9$",
            "$13$"
        ],
        answer: 0,
        explanation: "Công sai của cấp số cộng là $d = u_2 - u_1 = 3 - (-1) = 4$.\\nSố hạng thứ năm bằng: $u_5=u_1+4d=-1+4\\cdot 4=15$."
    },
    {
        q: "Tập nghiệm của bất phương trình $\\log_3 (x+1)\\le 2$ là",
        options: [
            "$(1;9)$",
            "$(-1;7]$",
            "$(-\\infty;9]$",
            "$(-1;8]$"
        ],
        answer: 3,
        explanation: "Điều kiện xác định: $x+1> 0 \\Leftrightarrow x > -1$.\\nBất phương trình tương đương: $x+1 \\le 3^2 \\Leftrightarrow x+1 \\le 9 \\Leftrightarrow x \\le 8$.\\nKết hợp điều kiện, ta được tập nghiệm $S=(-1;8]$."
    },
    {
        q: "Dãy số nào trong các dãy số dưới đây là một cấp số cộng?",
        options: [
            "$1$; $5$; $10$; $15$; $20$",
            "$1$; $4$; $7$; $10$; $13$",
            "$6$; $6$; $6$; $6$; $7$",
            "$3$; $6$; $9$; $12$; $13$"
        ],
        answer: 1,
        explanation: "Dãy số $1$; $4$; $7$; $10$; $13$ có hiệu giữa hai số liên tiếp không đổi: $4-1=3$, $7-4=3$, $10-7=3$, $13-10=3$. Đây là cấp số cộng có công sai $d=3$."
    },
    {
        q: "Cho hàm số $y=f(x)$ liên tục trên $\\mathbb{R}$ và có đạo hàm là $f'(x)=x^2\\left(x^2-5x+4\\right)$, $\\forall x\\in \\mathbb{R}$. Hàm số $f(x)$ có bao nhiêu điểm cực tiểu?",
        options: [
            "$0$",
            "$2$",
            "$1$",
            "$3$"
        ],
        answer: 2,
        explanation: "Ta có $f'(x)=x^2(x-1)(x-4)=0 \\Leftrightarrow x=0$ (nghiệm bội chẵn), $x=1$ (nghiệm đơn), $x=4$ (nghiệm đơn).\\nQua $x=0$, $f'(x)$ không đổi dấu. Đạo hàm đổi dấu từ âm sang dương khi đi qua $x=4$. Do đó hàm số chỉ có $1$ điểm cực tiểu tại $x=4$."
    },
    {
        q: "Giá trị nhỏ nhất của hàm số $y=\\sqrt{16-x^2}$ trên đoạn $[-2;2]$ bằng",
        options: [
            "$4$",
            "$2\\sqrt{3}$",
            "$2\\sqrt{5}$",
            "$0$"
        ],
        answer: 1,
        explanation: "Đạo hàm $y'=\\dfrac{-x}{\\sqrt{16-x^2}}=0 \\Leftrightarrow x=0 \\in [-2;2]$.\\nTính các giá trị biên và điểm dừng: $y(-2)=y(2)=\sqrt{16-4}=2\\sqrt{3}$; $y(0)=\\sqrt{16}=4$.\\nSuy ra giá trị nhỏ nhất của hàm số trên đoạn $[-2;2]$ bằng $2\\sqrt{3}$."
    },
    {
        q: "Trong không gian, cho hai vectơ $\\overrightarrow{u}$ và $\\overrightarrow{v}$ thỏa mãn $\\left|\\overrightarrow{u}\\right|=5$, $\\left|\\overrightarrow{v}\\right|=8$ và $\\left(\\overrightarrow{u},\\overrightarrow{v}\\right)=120^\\circ$. Khẳng định nào dưới đây là đúng?",
        options: [
            "$\\overrightarrow{u}\\cdot \\overrightarrow{v}=20$",
            "$\\overrightarrow{u}\\cdot \\overrightarrow{v}=-20\\sqrt{3}$",
            "$\\overrightarrow{u}\\cdot \\overrightarrow{v}=-20$",
            "$\\overrightarrow{u}\\cdot \\overrightarrow{v}=40$"
        ],
        answer: 2,
        explanation: "Theo định nghĩa tích vô hướng: $\\vec{u}\\cdot \\vec{v}=\\left|\\vec{u}\\right| \\cdot \\left|\\vec{v}\\right| \\cdot \\cos \\left(\vec{u},\\vec{v}\\right)=5\\cdot 8\\cdot \\cos 120^{\\circ}=-20$."
    },
    {
        q: "Cho hình chóp $S.ABCD$, có đáy $ABCD$ là hình thoi, $SA=AB=2$, $\\widehat{ABC}=60^{\\circ}$, $SA$ vuông góc với mặt đáy. Gọi $H$ là trung điểm của $SA$. Tính $D=\\left|2\\overrightarrow{SH}+\\overrightarrow{AD}-2\\overrightarrow{BH}\\right|$.",
        options: [
            "$2\\sqrt{7}$",
            "$2\\sqrt{2}$",
            "$\\sqrt{5}$",
            "$4$"
        ],
        answer: 0,
        explanation: "Do đáy là hình thoi có $\\widehat{ABC}=60^{\\circ}$ nên $\\triangle ABC$ và $\\triangle ADC$ là các tam giác đều cạnh bằng 2. Ta có $\\overrightarrow{AD} = \\overrightarrow{BC}$.\\nThu gọn biểu thức vectơ: $2\\overrightarrow{SH} + \\overrightarrow{AD} - 2\\overrightarrow{BH} = 2(\\overrightarrow{SH} + \\overrightarrow{HB}) + \\overrightarrow{BC} = 2\\overrightarrow{SB} + \\overrightarrow{BC} = \\overrightarrow{SB} + (\\overrightarrow{SB} + \\overrightarrow{BC}) = \\overrightarrow{SB} + \\overrightarrow{SC}$.\\nGọi $I$ là trung điểm $BC$, ta có $\\overrightarrow{SB} + \\overrightarrow{SC} = 2\\overrightarrow{SI} \\Rightarrow D = 2SI$.\\nTam giác $SBC$ cân tại $S$ có trung tuyến $SI \\perp BC$. Tính cạnh: $SB = \\sqrt{SA^2 + AB^2} = \\sqrt{4+4} = \\sqrt{8}$, $BI = 1 \\Rightarrow SI = \\sqrt{SB^2 - BI^2} = \\sqrt{8-1} = \\sqrt{7}$.\\nVậy $D = 2\\sqrt{7}$."
    },
    {
        q: "Trong không gian $Oxyz$, tam giác $ABC$ có $\\overrightarrow{AB}=(-2;-5;0)$, $\\overrightarrow{AC}=(2;-2;0)$. Độ dài đoạn thẳng $BC$ bằng",
        options: [
            "$1$",
            "$5$",
            "$3$",
            "$\\sqrt{10}$"
        ],
        answer: 1,
        explanation: "Ta có $\\overrightarrow{BC}=\\overrightarrow{AC}-\\overrightarrow{AB}=(2-(-2); -2-(-5); 0-0) = \\left(4;3;0\\right)$.\\nĐộ dài đoạn thẳng $BC = \\sqrt{4^2+3^2+0^2} = 5$."
    },
    {
        q: "Cho $a$, $b$ là hai số thực dương khác $1$ thỏa mãn đồ thị hàm số $y=f(x)=\\log_a x+\\log_b x$ luôn đi qua điểm $M(\\mathrm{e};20)$. Tính đạo hàm của hàm số tại điểm $x=5$.",
        options: [
            "$15$",
            "$\\dfrac{1}{15}$",
            "$4$",
            "$\\dfrac{e}{4}$"
        ],
        answer: 2,
        explanation: "Do đồ thị hàm số đi qua điểm $M(\\mathrm{e};20)$ nên: $20 = \\log_a \\mathrm{e} + \\log_b \\mathrm{e} = \\dfrac{1}{\\ln a} + \\dfrac{1}{\\ln b}$.\\nĐạo hàm của hàm số là: $y' = \\dfrac{1}{x\\ln a} + \\dfrac{1}{x\\ln b} = \\dfrac{1}{x}\\left(\\dfrac{1}{\\ln a} + \\dfrac{1}{\\ln b}\\right)$.\\nTại mốc $x=5$: $y'(5) = \\dfrac{1}{5} \\cdot 20 = 4$."
    },
    {
        q: "Tiếp tuyến của đồ thị hàm số $y=\\dfrac{2x+3}{x-2}$ tại điểm có hoành độ bằng $3$ có phương trình là",
        options: [
            "$y=7x+13$",
            "$y=30-7x$",
            "$y=3x+9$",
            "$y=-\\dfrac{4}{3} x-2$"
        ],
        answer: 1,
        explanation: "Tọa độ tiếp điểm tại $x_0=3$ là $y_0 = y(3) = 9$.\\nTính đạo hàm: $y'=\\dfrac{-7}{(x-2)^2} \\Rightarrow$ hệ số góc tiếp tuyến là $k = y'(3) = -7$.\\nPhương trình tiếp tuyến: $y = -7(x-3) + 9 \\Leftrightarrow y = -7x + 30$."
    },
    {
        q: "Cho hàm số $y=f(x)=\\dfrac{1}{2} x^2+x-6\\ln x+2025$ nghịch biến trên khoảng nào sau đây?",
        options: [
            "$(-3;2)$",
            "$(2;+\\infty)$",
            "$(0;3)$",
            "$(0;1)$"
        ],
        answer: 3,
        explanation: "Tập xác định: $\\mathscr{D}=(0;+\infty)$.\\nTa có $f'(x)=x+1-\\dfrac{6}{x}=\\dfrac{x^2+x-6}{x}$.\\nXét $f'(x)=0 \\Rightarrow x^2+x-6=0 \\Leftrightarrow x=2$ (do $x>0$).\\nĐạo hàm $f'(x) < 0$ khi $0 < x < 2$, tức hàm số nghịch biến trên khoảng $(0;2)$. Do đó hàm số nghịch biến trên khoảng con $(0;1)$."
    },
    {
        q: "Một cửa hàng buôn giày nhập một đôi với giá là 40 đôla. Cửa hàng ước tính rằng nếu đôi giày được bán với giá $x$ đôla thì mỗi tháng khách hàng sẽ mua $\\left(120-x\\right)$ đôi. Hỏi cửa hàng bán một đôi giày giá bao nhiêu thì thu được nhiều lãi nhất?",
        options: [
            "$80$ USD",
            "$160$ USD",
            "$40$ USD",
            "$240$ USD"
        ],
        answer: 0,
        explanation: "Hàm lợi nhuận một tháng tính theo giá bán $x$ ($40 \\le x \\le 120$) là: $f(x)=(x-40)(120-x)=-x^2+160x-4800$.\\nĐây là hàm bậc hai đạt giá trị lớn nhất tại đỉnh parabol: $x = -\\dfrac{b}{2a} = -\\dfrac{160}{2(-1)} = 80$ USD."
    }
];

window.quizData['on-tn-de-13-2612_p2'] = [
    {
        q: "Lợi nhuận thu được $P$ (nghìn USD) của một công ty khi dùng số tiền $x$ (nghìn USD) chi cho quảng cáo được cho bởi công thức $P(x) = -\\dfrac{1}{10}x^3 + 6x^2 + 400$ với $x \\ge 0$. Xét tính đúng sai của các khẳng định sau:",
        sub_questions: [
            { text: "Lợi nhuận của công ty tăng khi số tiền chi cho quảng cáo tăng", correct: false },
            { text: "Có hai phương án giúp công ty có thể thu được lợi nhuận bằng 800 nghìn USD", correct: true },
            { text: "Hàm số $P = P(x)$ có hai điểm cực trị", correct: false },
            { text: "Lợi nhuận tối đa mà công ty thu được bằng 3,6 triệu USD", correct: true }
        ],
        explanation: "- Mệnh đề 1 SAI vì tính đạo hàm $P'(x) = -\\dfrac{3}{10}x^2 + 12x = 0 \\Leftrightarrow x=0$ hoặc $x=40$. Lợi nhuận tăng trên khoảng $(0;40)$ nhưng giảm khi chi phí vượt quá 40.\\n- Mệnh đề 2 ĐÚNG vì giải phương trình $P(x) = 800 \\Leftrightarrow -\\dfrac{1}{10}x^3 + 6x^2 + 400 = 800$ thu được hai nghiệm dương thỏa mãn là $x \\approx 8,84$ và $x \\approx 58,84$.\\n- Mệnh đề 3 SAI vì trên miền $x \\ge 0$, hàm số chỉ có 1 điểm cực đại tại $x=40$.\\n- Mệnh đề 4 ĐÚNG vì giá trị cực đại đạt mức tối đa là $P(40) = 3600$ nghìn USD = 3,6 triệu USD."
    },
    {
        q: "Cho hàm số $y = f(x) = \\dfrac{x^2+2x+4}{x+2}$. Xét tính đúng sai của các khẳng định sau:",
        sub_questions: [
            { text: "Hàm số đã cho đồng biến trên khoảng $(0;+\\infty)$", correct: true },
            { text: "Gọi A, B là các điểm cực đại, cực tiểu của đồ thị hàm số. Diện tích của tam giác OAB bằng 8, trong đó O là gốc tọa độ", correct: false },
            { text: "Đường thẳng đi qua hai điểm cực trị của đồ thị hàm số là $y = 2x +2$", correct: true },
            { text: "Tổng giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn $[-3;3]$ bằng -3,2", correct: false }
        ],
        explanation: "- Mệnh đề 1 ĐÚNG vì tập xác định $\\mathscr{D} = \\mathbb{R} \\setminus \\{-2\\}$ và $y' = \\dfrac{x^2+4x}{(x+2)^2} = 0 \\Leftrightarrow x=0, x=-4$. Trong khoảng $(0;+\\infty)$ ta có $y' > 0$ nên hàm số đồng biến.\\n- Mệnh đề 2 SAI vì hai điểm cực trị là $A(-4;-6)$ và $B(0;2)$. Điểm $B \\in Oy$ nên diện tích tam giác là $S = \\dfrac{1}{2} \\cdot OB \\cdot |x_A| = \\dfrac{1}{2} \\cdot 2 \\cdot 4 = 4 \\neq 8$.\\n- Mệnh đề 3 ĐÚNG vì viết phương trình đường thẳng nối liền hai điểm cực trị $A, B$ ta thu được đồ thị hàm số $y=2x+2$.\\n- Mệnh đề 4 SAI vì đoạn $[-3;3]$ chứa điểm gián đoạn $x=-2$ làm hàm số tiến tới vô cực, do đó không tồn tại GTLN và GTNN trên miền này."
    },
    {
        q: "Bạn An làm đèn lồng bằng cách dùng một sợi dây đồng dài 28 dm cắt thành ba đoạn để uốn làm khung đèn. Đoạn thứ nhất uốn thành hình vuông $ABCD$ cạnh $x$ (dm) làm đáy, hai đoạn còn lại uốn thành các đường gấp khúc $ASC$ và $BSD$. Khung đèn sau khi hoàn thiện là một hình chóp tứ giác đều $S.ABCD$ dán giấy màu trang trí xung quanh mặt bên (không dán đáy). Xét tính đúng sai:",
        sub_questions: [
            { text: "Độ dài cạnh bên của khung đèn bằng $(7 - x)$ dm với $0 < x < 7$", correct: true },
            { text: "Khi $x = 4$ thì độ dài đường cao của khung đèn là 1 dm", correct: true },
            { text: "Khi các cạnh bằng nhau thì diện tích giấy màu cần dùng là $14\\sqrt{3}$ dm$^2$", correct: false },
            { text: "Thể tích phần không gian của đèn lồng lớn nhất khi $x \\approx 3{,}25$ dm", correct: true }
        ],
        explanation: "- Mệnh đề 1 ĐÚNG vì tổng độ dài của 4 cạnh đáy và 4 cạnh bên là $4x + 4l = 28 \\Rightarrow l = 7-x$, điều kiện $l>0 \\Rightarrow 0 < x < 7$.\\n- Mệnh đề 2 ĐÚNG vì khi $x=4 \\Rightarrow l=3$, nửa đường chéo đáy bằng $2\\sqrt{2}$. Chiều cao hình chóp $h = \\sqrt{l^2 - (x\\sqrt{2}/2)^2} = \\sqrt{3^2 - 8} = 1$ dm.\\n- Mệnh đề 3 SAI vì các cạnh bằng nhau $\\Leftrightarrow x = 7-x \\Leftrightarrow x=3,5$. Mặt bên là các tam giác đều cạnh 3,5, diện tích xung quanh dán giấy màu bằng $4 \\cdot \\dfrac{3,5^2\\sqrt{3}}{4} = \\dfrac{49\\sqrt{3}}{4}$ dm$^2$.\\n- Mệnh đề 4 ĐÚNG vì lập hàm thể tích khối chóp $V = \\dfrac{1}{3}x^2h = \\dfrac{1}{3}\\sqrt{\\dfrac{x^6}{2}-14x^5+49x^4}$, đạo hàm tìm cực trị trên khoảng $(0;7)$ cho nghiệm hoành độ tối ưu $x = \\dfrac{35-\\sqrt{637}}{3} \\approx 3,25$ dm."
    },
    {
        q: "Trong không gian $Oxyz$, cho bốn điểm $S(1;2;3)$, $A(3;2;3)$, $B(1;5;3)$, $C(1;2;6)$ được mô phỏng trên hệ lưới tọa độ đơn vị. Xét tính đúng sai:",
        image: "images/2612OnTNDe13/2612OnTNDe13DS4.png",
        sub_questions: [
            { text: "Tọa độ điểm $A, B$ lần lượt là $(3;2;3)$ và $(1;5;3)$", correct: true },
            { text: "$\\overrightarrow{SC}\\cdot\\overrightarrow{BC} = 6$", correct: false },
            { text: "$\\cos \\widehat{BAC} = \\dfrac{\\sqrt{2}}{5}$", correct: false },
            { text: "Xét hình nón $(\\mathcal{N})$ có đỉnh S, điểm A thuộc đường sinh và hai điểm B, C thuộc đường tròn đáy của $(\\mathcal{N})$. Bán kính hình nón bằng $\\sqrt{6}$", correct: true }
        ],
        explanation: "- Mệnh đề 1 ĐÚNG vì dóng hệ trục tọa độ không gian từ hình lưới cho thấy tọa độ chuẩn xác là $A(3;2;3)$ và $B(1;5;3)$.\\n- Mệnh đề 2 SAI vì $\\overrightarrow{SC}=(0;0;3)$ và $\\overrightarrow{BC}=(0;-3;3) \\Rightarrow \\overrightarrow{SC}\\cdot\\overrightarrow{BC} = 0+0+9=9$.\\n- Mệnh đề 3 SAI vì $\\overrightarrow{AB}=(-2;3;0)$ và $\\overrightarrow{AC}=(-2;0;3) \\Rightarrow \\cos\\widehat{BAC} = \\dfrac{4}{\\sqrt{13}\\sqrt{13}} = \\dfrac{4}{13}$.\\n- Mệnh đề 4 ĐÚNG vì từ tọa độ, ta thấy $SA=2, SB=3, SC=3$ và ba trục này đôi một vuông góc tại $S$. Kéo dài đường sinh ngắn $SA$ thành $SA'=3$. Khi đó hình nón ngoại tiếp chóp đều $S.A'BC$ có đáy là tam giác đều cạnh $BC=3\\sqrt{2}$. Bán kính đáy nón chính bằng bán kính đường tròn ngoại tiếp tam giác đều này: $r = \\dfrac{BC\\sqrt{3}}{3} = \\dfrac{3\\sqrt{2}\\sqrt{3}}{3} = \\sqrt{6}$."
    }
];

window.quizData['on-tn-de-13-2612_p3'] = [
    {
        q: "Một chú chim bồ câu đang ở vị trí $M$ được mô hình hóa trong không gian $Oxyz$. Gọi $H$ là hình chiếu của $M$ xuống mặt phẳng $(Oxy)$. Biết $OM=50\\sqrt{2}$, góc giữa tia hoành và hình chiếu $\\left(\\overrightarrow{i},\\overrightarrow{OH}\\right)=60^{\\circ}$ và góc nâng hình chiếu $\\left(\\overrightarrow{OH},\\overrightarrow{OM}\\right)=45^{\\circ}$. Nếu điểm $M$ có tọa độ dạng $\\left(a;b;c\\right)$ thì giá trị của biểu thức $a+b\\sqrt{3}+c$ bằng bao nhiêu?",
        image: "images/2612OnTNDe13/2612OnTNDe13TLN1.png",
        answer: "150",
        explanation: "Tam giác $OMH$ vuông cân tại $H$ do góc dốc phẳng $45^{\\circ} \\Rightarrow MH = OH = \\dfrac{OM}{\\sqrt{2}} = 50$. Cao độ tương ứng $c = MH = 50$.\\nXét tam giác vuông hình chiếu $OAH$ tại đáy vuông tại $A$ có góc định hướng $60^{\\circ}$ so với trục hoành:\\nHoành độ: $a = OA = OH \\cdot \\cos 60^{\\circ} = 50 \\cdot \\dfrac{1}{2} = 25$.\\nTung độ: $b = OB = OH \\cdot \\sin 60^{\\circ} = 50 \\cdot \\dfrac{\\sqrt{3}}{2} = 25\\sqrt{3}$.\\nTọa độ thu được là $M(25; 25\\sqrt{3}; 50)$. Giá trị biểu thức: $25 + 25\\sqrt{3}\\sqrt{3} + 50 = 25 + 75 + 50 = 150$."
    },
    {
        q: "Biết tổng các nghiệm của phương trình $\\sin \\left(\\pi \\sin 2x\\right)=1$ trên đoạn $[0;2\\pi]$ bằng $a\\pi$. Tìm giá trị của hằng số $a$.",
        answer: "3",
        explanation: "Phương trình lượng giác cơ bản: $\\pi \\sin 2x = \\dfrac{\\pi}{2} + k2\\pi \\Leftrightarrow \\sin 2x = \\dfrac{1}{2} + 2k$. Do miền giá trị sin nằm trong $[-1;1]$ nên bắt buộc hằng số nguyên $k=0 \\Rightarrow \\sin 2x = \\dfrac{1}{2}$.\\nGiải họ nghiệm ta được: $x = \\dfrac{\\pi}{12} + l\\pi$ hoặc $x = \\dfrac{5\\pi}{12} + l\\pi$.\\nTrên đoạn $[0;2\\pi]$, các nghiệm thỏa mãn lần lượt là: $\\dfrac{\\pi}{12}, \\dfrac{13\\pi}{12}, \\dfrac{5\\pi}{12}, \\dfrac{17\\pi}{12}$.\\nTổng các nghiệm thu được bằng: $\\dfrac{\\pi+13\\pi+5\\pi+17\\pi}{12} = \\dfrac{36\\pi}{12} = 3\\pi \\Rightarrow a = 3$."
    },
    {
        q: "Mỗi trang của một quyển sách giáo khoa Toán dạng hình chữ nhật $ABCD$ diện tích $491{,}04$ cm$^2$ được định dạng lề: lề trên và dưới đều bằng 22 mm; lề trái rộng 15 mm, lề phải rộng 16 mm. Phần diện tích dùng để trình bày hình chữ nhật $MNPQ$ bên trong đạt giá trị lớn nhất, khi đó chu vi của mỗi trang sách bằng bao nhiêu mm?",
        answer: "900",
        explanation: "Đổi đơn vị diện tích tổng thể: $491,04\\text{ cm}^2 = 49104\\text{ mm}^2$. Gọi kích thước chiều dọc trang sách là $x > 0$ (mm) $\\Rightarrow$ chiều ngang là $\\dfrac{49104}{x}$ (mm).\\nKích thước vùng trình bày bên trong sau khi trừ khoảng cách các biên lề:\\nChiều dọc lõi: $x - 22 - 22 = x - 44$ mm.\\nChiều ngang lõi: $\\dfrac{49104}{x} - 15 - 16 = \\dfrac{49104}{x} - 31$ mm.\\nHàm diện tích lõi trình bày: $S = (x-44)\\left(\\dfrac{49104}{x}-31\\right) = -31x - \\dfrac{2160576}{x} + 50468$.\\nÁp dụng bất đẳng thức Cauchy: $31x + \\dfrac{2160576}{x} \\ge 2\\sqrt{31 \\cdot 2160576} = 16368 \\Rightarrow S \\le -16368 + 50468 = 34100$.\\nDấu bằng đạt diện tích lớn nhất khi $31x^2 = 2160576 \\Leftrightarrow x = 264$ mm. Chiều rộng tương ứng bằng $186$ mm.\\nChu vi trang sách bằng: $2 \\cdot (264 + 186) = 900$ mm."
    },
    {
        q: "Một vật lưu niệm làm bằng thủy tinh có dạng hình lăng tru đứng có đáy $ABCD$ là hình vuông cạnh 10 cm. Phía bên trong là khối nhựa đặc hình chóp cụt đều $MNPQ.ABCD$ cạnh đáy nhỏ $MN=5$ cm và có chung chiều cao với hình lăng trụ. Biết khoảng cách từ điểm $B$ đến mặt phẳng vách nghiêng $(CDQP)$ bằng $3\\sqrt{10}$ cm. Phần khoảng trống còn lại bên trong vật lưu niệm bơm đầy chất lỏng màu. Tính thể tích phần chất lỏng dưới dạng phân số tối giản $\\dfrac{a}{b}$ (lít) và tìm tổng giá trị $a+b$.",
        image: "images/2612OnTNDe13/2612OnTNDe13TLN4.png",
        answer: "21",
        explanation: "Kéo dài mặt nghiêng $PQ$ cắt vách biên mặt đứng lăng trụ tại $H$, khoảng cách từ $B$ đến mặt bên chính là đoạn cao $BL = 3\\sqrt{10}$ cm hạ vuông góc xuống mặt phẳng chéo chứa $CH$. Sử dụng tam giác đồng dạng $\\triangle LBC \\backsim \\triangle C'CH$, lập tỉ số: $\\dfrac{BL}{CC'} = \\dfrac{BC}{CH} \\Leftrightarrow \\dfrac{3\\sqrt{10}}{h} = \\dfrac{10}{\\sqrt{h^2 + 2,5^2}} \\Rightarrow h = \\dfrac{15}{2} = 7,5$ cm.\\nThể tích khối chóp cụt chiếm chỗ: $V_1 = \\dfrac{h}{3}(S_1+S_2+\\sqrt{S_1S_2}) = \\dfrac{7,5}{3}(100 + 25 + 50) = \\dfrac{875}{2} \\text{ cm}^3$.\\nThể tích hình lăng trụ tổng thể ngoài: $V_0 = 10^2 \\cdot 7,5 = 750 \\text{ cm}^3$.\\nThể tích chất lỏng điền đầy khoảng trống: $V = V_0 - V_1 = 750 - 437,5 = 312,5 \\text{ cm}^3 = \\dfrac{625}{2} \\text{ cm}^3$. Do $1\\text{ lít} = 1000\\text{ cm}^3 \\Rightarrow V = \\dfrac{312,5}{1000} = \\dfrac{5}{16}$ lít $\\Rightarrow a=5, b=16 \\Rightarrow a+b=21$."
    },
    {
        q: "Cho hình lăng trụ $ABC.A'B'C'$ có cấu trúc mặt chéo khối $A'.ABC$ lập thành một tứ diện đều cạnh bằng 2 cm. Tại cùng một thời điểm, hai chất điểm xuất phát từ vị trí $C'$ và $A$ di chuyển dọc hành trình trên đoạn $C'A'$ và $AM$ (với $M$ là trung điểm của đoạn đáy $BC$) với tốc độ không đổi lần lượt là 2 m/s và $2\\sqrt{3}$ m/s. Tìm khoảng mốc thời gian ngắn nhất (tính theo giây) để khoảng cách giữa hai chất điểm đạt cực tiểu?",
        answer: "0.57",
        explanation: "Thiết lập hệ tọa độ gốc đặt tại trung điểm đáy $M(0;0;0)$, trục hoành dọc $BC$, trục tung dọc trung tuyến đáy $MA$, trục cao song song đường dóng trọng tâm $\\overrightarrow{GA'}$. Tọa độ các điểm biên khối tứ diện đều cạnh 2: $A(0;\\sqrt{3};0), B(-1;0;0), C(1;0;0), G(0; \\sqrt{3}/3; 0) \\Rightarrow A'\\left(0; \\dfrac{\\sqrt{3}}{3}; \\dfrac{2\\sqrt{6}}{3}\\right)$, dóng lăng trụ đứng tịnh tiến tìm được điểm xuất phát $C'\\left(1; -\\dfrac{2\\sqrt{3}}{3}; \\dfrac{2\\sqrt{6}}{3}\\right)$.\\nVectơ vận tốc chuyển động theo thời gian $t$:\\nChất điểm 1 đi từ $C'$ hướng về $A'$: $\\vec{v}_1 = ( -2; 2\\sqrt{3}; 0) \\cdot t \\Rightarrow X\\left(1-t; -\\dfrac{2\\sqrt{3}}{3}+\\sqrt{3}t; \\dfrac{2\\sqrt{6}}{3}\\right)$.\\nChất điểm 2 đi từ $A$ hướng về $M$: $\\vec{v}_2 = ( 0; -2\\sqrt{3}; 0) \\cdot t \\Rightarrow Y(0; \\sqrt{3}-2\\sqrt{3}t; 0)$.\\nHàm số tính khoảng cách bình phương hình học: $XY^2 = (1-t)^2 + \\left(-\\dfrac{5\\sqrt{3}}{3} + 3\\sqrt{3}t\\right)^2 + \\dfrac{24}{9} = 28t^2 - 32t + 12$.\\nBiểu thức đạt cực tiểu tại đỉnh parabol thời gian: $t = -\\dfrac{b}{2a} = \\dfrac{32}{2 \\cdot 28} = \\dfrac{4}{7} \\approx 0,57$ giây."
    },
    {
        q: "Cho hai hộp đựng bi xanh và đỏ, tổng số lượng bi của cả hai hộp bằng 15 viên. Biết hộp thứ nhất đựng nhiều bi hơn hộp thứ hai, đồng thời số bi xanh ở hộp một nhiều hơn số bi xanh ở hộp hai. Lấy ngẫu nhiên từ mỗi hộp ra một viên bi. Biết xác suất để lấy được 2 viên đều màu xanh bằng $\\dfrac{5}{28}$, khi đó xác suất để lấy được 2 viên đều màu đỏ có dạng phân số tối giản $\\dfrac{a}{b}$. Tính giá trị của tổng $a+b$.",
        answer: "71",
        explanation: "Gọi tổng số bi của hai hộp lần lượt là $m, n$ ($m>n, m+n=15$) và số lượng bi xanh tương ứng là $x, y$ ($x>y$).\\nXác suất bốc được 2 bi xanh: $P_{xanh} = \\dfrac{x}{m} \\cdot \\dfrac{y}{n} = \\dfrac{5}{28} = \\dfrac{10}{56}$. Phân tích nhân tử số nguyên: mẫu số $m \\cdot n = 56 = 8 \\cdot 7 \\Rightarrow m=8, n=7$; tử số $x \\cdot y = 10 = 5 \\cdot 2 \\Rightarrow x=5, y=2$.\\nSố lượng bi đỏ còn lại trong hộp 1 là $8-5=3$ viên, trong hộp 2 là $7-2=5$ viên.\\nXác suất để rút được đồng thời 2 viên bi đỏ từ hai hộp bằng: $P_{đỏ} = \\dfrac{3}{8} \\cdot \\dfrac{5}{7} = \\dfrac{15}{56}$.\\nPhân số đã tối giản $\\Rightarrow a=15, b=56 \\Rightarrow a+b = 15+56 = 71$."
    }
];