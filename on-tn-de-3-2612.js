// DỮ LIỆU ĐỀ 3 - THUỘC HỆ THỐNG IRIS MATH
window.quizData = window.quizData || {};

window.quizData['on-tn-de-3-2612_p1'] = [
    {
        q: "Cho $\\displaystyle\\int \\dfrac{1}{\\sin^2 x} dx = F(x) + C$. Khẳng định nào dưới đây đúng?",
        options: [
            "$F'(x) = \\dfrac{-\\sin 2x}{\\cos^4 x}$",
            "$F'(x) = -\\cot x$",
            "$F'(x) = -\\dfrac{1}{\\sin^2 x}$",
            "$F'(x) = \\dfrac{1}{\\sin^2 x}$"
        ],
        answer: 3,
        explanation: "Ta có $\\displaystyle\\int \\dfrac{1}{\\sin^2 x} dx = F(x) + C \\Rightarrow F'(x) = \\left( \\displaystyle\\int \\dfrac{1}{\\sin^2 x} dx \\right)' = \\dfrac{1}{\\sin^2 x}$."
    },
    {
        q: "Bạn An rất thích chạy bộ. Thời gian chạy bộ mỗi ngày của bạn An được thống kê lại ở bảng sau: <br><table border='1' style='border-collapse:collapse; text-align:center; width:100%; max-width:500px; margin:10px auto;'><tr><td>Thời gian (phút)</td><td>$[20;25)$</td><td>$[25;30)$</td><td>$[30;35)$</td><td>$[35;40)$</td><td>$[40;45)$</td></tr><tr><td>Số ngày</td><td>6</td><td>6</td><td>4</td><td>1</td><td>1</td></tr></table> Hãy tính khoảng tứ phân vị của mẫu số liệu ghép nhóm trong bảng trên.",
        options: [
            "$9{,}225$",
            "$8{,}25$",
            "$9{,}25$",
            "$8{,}125$"
        ],
        answer: 3,
        explanation: "Cỡ mẫu $n = 18$.\\nTứ phân vị thứ nhất $Q_1 = 20 + \\dfrac{\\dfrac{18}{4} - 0}{6} \\cdot (25 - 20) = 23,75$.\\nTứ phân vị thứ ba $Q_3 = 30 + \\dfrac{\\dfrac{3 \\cdot 18}{4} - (6 + 6)}{4} \\cdot (35 - 30) = 31,875$.\\nKhoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1 = 31,875 - 23,75 = 8,125$."
    },
    {
        q: "Trong không gian $Oxyz$, đường thẳng $d$ đi qua điểm $M(1;-1;3)$ và song song với đường thẳng $d_1: \\dfrac{x-2}{2} = \\dfrac{y+1}{1} = \\dfrac{z+3}{-1}$ có phương trình là:",
        options: [
            "$\\left\\{ \\begin{array}{l} x=1+2t \\\\ y=-1+t \\\\ z=3-t \\end{array} \\right.$",
            "$\\left\\{ \\begin{array}{l} x=1+2t \\\\ y=-1+t \\\\ z=3+t \\end{array} \\right.$",
            "$\\left\\{ \\begin{array}{l} x=2+t \\\\ y=1-t \\\\ z=-1+3t \\end{array} \\right.$",
            "$\\left\\{ \\begin{array}{l} x=1+2t \\\\ y=1+t \\\\ z=3-t \\end{array} \\right.$"
        ],
        answer: 0,
        explanation: "Đường thẳng $d$ song song $d_1$ nên có véc-tơ chỉ phương $\\vec{u}_d = \\vec{u}_{d_1} = (2;1;-1)$. Kết hợp đi qua $M(1;-1;3)$, ta được phương trình dạng tham số tương ứng."
    },
    {
        q: "Cho hàm số bậc ba $y=f(x)$ có đồ thị như hình vẽ. Số đường tiệm cận đứng của đồ thị hàm số $g(x) = \\dfrac{2025}{f(x)}$ là:",
        image: "images/2612OnTNDe3/2612OnTNDe3TN4.png",
        options: [
            "3",
            "1",
            "0",
            "2"
        ],
        answer: 3,
        explanation: "Điều kiện xác định: $f(x) \\neq 0$. Dựa vào đồ thị, phương trình $f(x)=0$ có hai nghiệm phân biệt $x=0$ và $x=a$ (với $a < -2$). Vậy đồ thị hàm số $g(x)$ có 2 đường tiệm cận đứng."
    },
    {
        q: "Tập nghiệm của bất phương trình $\\log_2(x^2+3x) \\le 2$ là:",
        options: [
            "$\\left(0;1\\right)$",
            "$\\left(0;\\dfrac{1}{2}\\right]$",
            "$\\left[-4;-3\\right) \\cup \\left(0;1\\right]$",
            "$\\left[-4;-3\\right] \\cup \\left[0;1\\right]$"
        ],
        answer: 2,
        explanation: "$\\log_2(x^2+3x) \\le 2 \\Leftrightarrow 0 < x^2+3x \\le 4 \\Leftrightarrow \\left\\{ \\begin{array}{l} x^2+3x > 0 \\\\ x^2+3x-4 \\le 0 \\end{array} \\right. \\Leftrightarrow \\left[ \\begin{array}{l} -4 \\le x < -3 \\\\ 0 < x \\le 1 \\end{array} \\right.$."
    },
    {
        q: "Cho phương trình $\\tan(2x-15^\\circ)=1$ biết rằng $-90^\\circ<x<90^\\circ$. Số nghiệm của phương trình là",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        answer: 1,
        explanation: "$\\tan(2x-15^\\circ)=1 \\Rightarrow 2x-15^\\circ=45^\\circ+k\\cdot180^\\circ \\Rightarrow x=30^\\circ+k\\cdot90^\\circ$.\\nVới $-90^\\circ<x<90^\\circ$: $k=-1 \\Rightarrow x=-60^\\circ$; $k=0 \\Rightarrow x=30^\\circ$ (thu được 2 nghiệm)."
    },
    {
        q: "Trong không gian với hệ toạ độ $Oxyz$, cho mặt cầu $(S) \\colon x^2+y^2+z^2-2x+2y-4z-2=0$. Tính bán kính $r$ của mặt cầu.",
        options: [
            "$r=2\\sqrt{2}$",
            "$r=\\sqrt{2}$",
            "$r=4$",
            "$r=\\sqrt{26}$"
        ],
        answer: 0,
        explanation: "Mặt cầu $(S) \\colon x^2+y^2+z^2-2x+2y-4z-2=0$ có tâm $I(1;-1;2)$ nên bán kính $r=\\sqrt{1^2+(-1)^2+2^2-(-2)}=2\\sqrt{2}$."
    },
    {
        q: "Cho hình chóp $S.ABC$ có đáy $ABC$ vuông tại $A$, cạnh bên $SA \\perp (ABC)$. Gọi $I$ là trung điểm cạnh $AC$, $H$ là hình chiếu của $I$ trên $SC$. Khẳng định nào sau đây đúng?",
        options: [
            "$(SBC) \\perp (IHB)$",
            "$(SAC) \\perp (SAB)$",
            "$(SAC) \\perp (SBC)$",
            "$(SBC) \\perp (SAB)$"
        ],
        answer: 1,
        explanation: "Vì $AB \\perp AC$ (do tam giác vuông tại $A$) và $AB \\perp SA$ (do $SA \\perp$ đáy). Suy ra $AB \\perp (SAC)$. Mà $AB \\subset (SAB)$ nên $(SAC) \\perp (SAB)$."
    },
    {
        q: "Trong các phương trình sau, phương trình nào vô nghiệm?",
        options: [
            "$3^x + 2 = 0$",
            "$5^x - 1 = 0$",
            "$\\log_2 x = 3$",
            "$\\log(x-1) = 1$"
        ],
        answer: 0,
        explanation: "Phương trình $3^x + 2 = 0 \\Leftrightarrow 3^x = -2$. Vì $3^x > 0$ với mọi $x \\in \\mathbb{R}$, nên phương trình này vô nghiệm."
    },
    {
        q: "Cho 3 số hạng đầu của một cấp số nhân có tổng bằng 13, đồng thời chúng lần lượt là số hạng thứ nhất, thứ ba và thứ chín của một cấp số cộng. Công bội của cấp số nhân là:",
        options: [
            "$q \\in \\{-1; 0\\}$",
            "$q \\in \{0; 1\\}$",
            "$q \\in \\{1; 3\\}$",
            "$q \\in \\{-1; -3\\}$"
        ],
        answer: 2,
        explanation: "Gọi cấp số nhân có các số hạng $u_1, u_2, u_3$ và cấp số cộng có công sai $d$. Ta có $u_1+u_2+u_3=13$ và $u_1=v_1, u_2=v_1+2d, u_3=v_1+8d$. Từ tính chất cấp số nhân $u_1u_3 = u_2^2 \\Rightarrow v_1(v_1+8d)=(v_1+2d)^2$.\\nGiải hệ phương trình tìm được: \\n- Với $d=0 \\Rightarrow u_1=u_2=u_3=\\dfrac{13}{3} \\Rightarrow q=1$.\\n- Với $d=1 \\Rightarrow v_1=1 \\Rightarrow u_1=1, u_2=3, u_3=9 \\Rightarrow q=3$."
    },
    {
        q: "Cho hình lăng trụ tam giác $ABC.A'B'C'$. Đặt $\\vec{AA'} = \\vec{a}, \\vec{AB} = \\vec{b}, \\vec{AC} = \\vec{c}, \\vec{BC} = \\vec{d}$. Khẳng định nào sau đây đúng?",
        image: "images/2612OnTNDe3/2612OnTNDe3TN11.png",
        options: [
            "$\\vec{a} = \\vec{b} + \\vec{c}$",
            "$\\vec{a} + \\vec{b} + \\vec{c} + \\vec{d} = \\vec{0}$",
            "$\\vec{b} - \\vec{c} + \\vec{d} = \\vec{0}$",
            "$\\vec{a} + \\vec{b} + \\vec{c} = \\vec{d}$"
        ],
        answer: 2,
        explanation: "Ta có biến đổi hiệu vectơ: $\\vec{b} - \\vec{c} + \\vec{d} = \\vec{AB} - \\vec{AC} + \\vec{BC} = \\vec{CB} + \\vec{BC} = \\vec{0}$."
    },
    {
        q: "Cho hàm số $y=f(x)$ liên tục trên $[-3;2]$ và có bảng biến thiên. Gọi $M$ và $m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên $[-1;2]$. Giá trị $M+m$ bằng:",
        image: "images/2612OnTNDe3/2612OnTNDe3TN12.png",
        options: [
            "3",
            "2",
            "1",
            "4"
        ],
        answer: 0,
        explanation: "Dựa vào bảng biến thiên trên đoạn $[-1;2]$, ta thấy giá trị lớn nhất $M = f(-1) = 3$ và giá trị nhỏ nhất $m = f(0) = 0$. Vậy $M + m = 3 + 0 = 3$."
    }
];

window.quizData['on-tn-de-3-2612_p2'] = [
    {
        q: "Ông An có một mảnh đất hình vuông $ABCD$ có cạnh $AB = 12$ m. Ông làm một hồ bơi dạng hình thang cong (phần tô đậm) và một lối đi là đoạn thẳng $HB$. Nếu đặt hệ trục tọa độ có gốc tại $A$ như hình vẽ, độ dài đơn vị là 1 m, thì đường cong $EFIG$ là một phần đồ thị của một hàm số bậc ba $y = f(x)$ có $F$ là điểm cực tiểu và $I$ là điểm cực đại. Biết $CH = DE = GB = 3$ m và các điểm $F, I$ cách cạnh $AD$ lần lượt là 2 m và 6 m. Xét tính đúng sai của các khẳng định sau:",
        image: "images/2612OnTNDe3/2612OnTNDe3DS1.png",
        sub_questions: [
            { text: "Phương trình của đường thẳng $HB$ là $y = -4x + 48$", correct: true },
            { text: "Tồn tại $a \\in \\mathbb{R}$ sao cho $f'(x) = a(x+2)(x+6)$", correct: false },
            { text: "Tiếp tuyến của đồ thị hàm số $y = f(x)$ tại điểm có hoành độ bằng 7 song song với đường thẳng $HB$", correct: false },
            { text: "Ông An cần đặt một cái thang lên xuống hồ bơi tại một điểm trên đường cong $EFIG$ sao cho khoảng cách từ điểm đặt thang đến lối đi là ngắn nhất, khoảng cách đó bằng 2,56 m", correct: true }
        ],
        explanation: "- Mệnh đề 1 ĐÚNG vì $H(9;12)$ và $B(12;0) \\Rightarrow HB: y = -4x + 48$.\\n- Mệnh đề 2 SAI vì $x=2$ và $x=6$ là hoành độ các điểm cực trị nên phải là $f'(x) = a(x-2)(x-6)$.\\n- Mệnh đề 3 SAI vì tìm được $f(x) = -\\dfrac{1}{9}x^3 + \\dfrac{4}{3}x^2 - 4x + 9 \\Rightarrow f'(7) = -\\dfrac{5}{3} \\neq -4$ (hệ số góc $HB$).\\n- Mệnh đề 4 ĐÚNG vì khoảng cách ngắn nhất từ $M \\in (C)$ tới $HB: 4x+y-48=0$ đạt được khi $f'(x)=-4 \\Leftrightarrow x=8 \\Rightarrow f(8)=\\dfrac{49}{9} \\Rightarrow d \\approx 2,56$ m."
    },
    {
        q: "Khảo sát số giờ tự học mỗi tuần của 20 học sinh lớp 12, ta thu được mẫu dữ liệu gốc và mẫu dữ liệu ghép nhóm tương ứng như trong bảng. Xét tính đúng sai của các khẳng định sau:",
        sub_questions: [
            { text: "Số trung bình của mẫu dữ liệu gốc lớn hơn số trung bình của mẫu số liệu ghép nhóm", correct: false },
            { text: "Độ lệch chuẩn của mẫu số liệu ghép nhóm $s \\approx 12,65$ (giờ)", correct: true },
            { text: "Khoảng túi phân vị của mẫu số liệu gốc nhỏ hơn khoảng tứ phân vị của mẫu số liệu ghép nhóm", correct: false },
            { text: "Giá trị trung vị của mẫu dữ liệu gốc và mẫu số liệu ghép nhóm là bằng nhau", correct: false }
        ],
        explanation: "- Mệnh đề 1 SAI vì tổng gốc là $506 \\Rightarrow \\bar{x}_{gốc} = 25,3$; trong khi tính theo giá trị đại diện nhóm ta thu được $\\bar{x}_{nhóm} = 27$.\\n- Mệnh đề 2 ĐÚNG vì tính được phương sai $s^2_{nhóm} = 160 \\Rightarrow s \\approx 12,65$.\\n- Mệnh đề 3 SAI vì $\\Delta_{Q(gốc)} = 36,5 - 13,5 = 23$ lớn hơn $\\Delta_{Q(nhóm)} = 38 - 16 = 22$.\\n- Mệnh đề 4 SAI vì trung vị mẫu gốc $M_e = 25$, còn trung vị mẫu ghép nhóm $M_e = 20 + \\dfrac{10-7}{4} \\cdot 10 = 27,5$."
    },
    {
        q: "Một thống kê về vi phạm tốc độ trong giờ cao điểm cho thấy: Tỷ lệ nam giới là $60\\%$, nữ giới là $40\\%$. Trong số các lái xe nam, tỷ lệ vi phạm tốc độ là $10\\%$. Trong số các lái xe nữ, tỷ lệ vi phạm tốc độ là $3\\%$. Xét tính đúng sai của các mệnh đề sau:",
        sub_questions: [
            { text: "Xác suất một lái xe được chọn ngẫu nhiên là nam giới và vi phạm tốc độ là 0,06", correct: true },
            { text: "Xác suất một lái xe được chọn ngẫu nhiên vi phạm tốc độ là 0,13", correct: false },
            { text: "Nếu một lái xe được chọn ngẫu nhiên vi phạm tốc độ, khả năng cao người đó là nam giới", correct: true },
            { text: "Biết một người đã bị dừng xe vì vi phạm tốc độ, xác suất người đó là nữ giới lớn hơn 0,2", correct: false }
        ],
        explanation: "- Mệnh đề 1 ĐÚNG vì $P(Nam \\cap V) = 0,6 \\cdot 0,1 = 0,06$.\\n- Mệnh đề 2 SAI vì xác suất toàn phần vi phạm tốc độ là $P(V) = 0,6 \\cdot 0,1 + 0,4 \\cdot 0,03 = 0,072$.\\n- Mệnh đề 3 ĐÚNG vì xác suất hậu nghiệm $P(Nam|V) = \\dfrac{0,06}{0,072} = \\dfrac{5}{6} \\approx 0,833 > 0,5$.\\n- Mệnh đề 4 SAI vì $P(Nữ|V) = \\dfrac{0,012}{0,072} = \\dfrac{1}{6} \\approx 0,167 < 0,2$."
    },
    {
        q: "Trong không gian $Oxyz$, một tàu ngầm di chuyển theo đường thẳng $\\Delta: \\dfrac{x-50}{3}=\\dfrac{y+20}{-4}=\\dfrac{z-10}{1}$ với vận tốc không đổi $v = 5\\text{ m/s}$. Một khu vực nguy hiểm (trạm mìn) có dạng hình cầu $(S)$ tâm $C(200;-300;60)$ và bán kính $R=80\\text{ (m)}$. Xét tính đúng sai:",
        sub_questions: [
            { text: "Vectơ chỉ phương của đường di chuyển $\\Delta$ vuông góc với $\\vec{OC}$", correct: false },
            { text: "Đường di chuyển $\\Delta$ nằm trong mặt phẳng $(P): 4x+3y=140$", correct: true },
            { text: "Tàu ngầm sẽ đi vào khu vực nguy hiểm $(S)$", correct: true },
            { text: "Thời gian ngắn nhất để tàu di chuyển từ vị trí $A(50;-20;10)$ đến khi chạm trán khu vực nguy hiểm là 63,5 giây", correct: false }
        ],
        explanation: "- Mệnh đề 1 SAI vì tích vô hướng $\\vec{u}_{\\Delta} \\cdot \\vec{OC} = 3(200) + (-4)(-300) + 1(60) = 1860 \\neq 0$.\\n- Mệnh đề 2 ĐÚNG vì điểm $A(50;-20;10) \\in (P)$ và $\\vec{u}_{\\Delta} \\cdot \\vec{n}_P = 3(4) + (-4)(3) + 1(0) = 0$.\\n- Mệnh đề 3 ĐÚNG vì khoảng cách $d(C, \\Delta) = \\dfrac{80\\sqrt{65}}{13} \\approx 49,6\\text{ m} < R = 80\\text{ m}$.\\n- Mệnh đề 4 SAI vì thế phương trình tham số vào mặt cầu thu được phương trình $13t^2 - 1620t + 48500 = 0 \\Rightarrow t_1 = 50$. Quãng đường di chuyển $AM = 50\\sqrt{26}\\text{ m} \\Rightarrow t_{\\min} = \\dfrac{AM}{v} = 10\\sqrt{26} \\approx 51\\text{ giây}$."
    }
];

window.quizData['on-tn-de-3-2612_p3'] = [
    {
        q: "Cho khối lăng trụ đứng $ABC.A'B'C'\\text{ }$có đáy là tam giác đều cạnh bằng 1. Biết khoảng cách giữa đường thẳng $B'C'$ với mặt phẳng $(A'BC)$ bằng $\\dfrac{\\sqrt{3}}{3}$. Thể tích của khối lăng trụ đã cho bằng bao nhiêu? (Kết quả làm tròn đến chữ số thập phân thứ hai).",
        answer: "0.34",
        explanation: "Do $B'C' \\parallel BC \\Rightarrow B'C' \\parallel (A'BC) \\Rightarrow d(B'C', (A'BC)) = d(B', (A'BC)) = d(A, (A'BC)) = \\dfrac{\\sqrt{3}}{3}$. Kẻ $AH \\perp BC$ tại trung điểm $H$, dựng $AK \\perp A'H \\Rightarrow AK = \\dfrac{\\sqrt{3}}{3}$ là khoảng cách. Trong tam giác vuông $A'AH$, ta có $\\dfrac{1}{AK^2} = \\dfrac{1}{AH^2} + \\dfrac{1}{AA'^2} \\Rightarrow AA' = \\dfrac{\\sqrt{15}}{5}$. Thể tích khối lăng trụ $V = AA' \\cdot S_{ABC} = \\dfrac{\\sqrt{15}}{5} \\cdot \\dfrac{\\sqrt{3}}{4} \\approx 0,34$."
    },
    {
        q: "Một bể ban đầu chứa 150 lít nước. Sau đó, cứ mỗi phút người ta bơm thêm 50 lít nước, đồng thời cho vào bể 20 gam chất khử trùng (hòa tan). Gọi $f(t)$ (gam/lít) là nồng độ chất khử trùng trong bể sau $t$ phút ($t \\ge 0$). Biết rằng sau khi khảo sát sự biến thiên của hàm số $f(t)$, ta thấy giá trị $f(t)$ tăng theo thời gian $t$ nhưng không vượt ngưỡng $p$ gam/lít. Tìm số $p$ (kết quả viết dưới dạng số thập phân).",
        answer: "0.4",
        explanation: "Thể tích nước sau $t$ phút: $V(t) = 150 + 50t$ (lít). Khối lượng chất khử trùng sau $t$ phút: $m(t) = 20t$ (gam). Nồng độ chất khử trùng là $f(t) = \\dfrac{20t}{50t+150}$. Ngưỡng giới hạn không vượt quá chính là tiệm cận ngang khi $t \\to +\\infty$, do đó $p = \\lim\\limits_{t \\to +\\infty} f(t) = \\dfrac{20}{50} = 0,4$."
    },
    {
        q: "Người ta thường dùng cẩu trục tháp để vận chuyển vật liệu xây dựng; thân tháp vuông góc với mặt đất, cần nâng vuông góc thân tháp dùng để làm điểm tựa nâng vật liệu, trên cần nâng có bộ phận gọi là xe con có thể chạy dọc cần nâng nhằm di chuyển vật liệu. Ban đầu vật liệu ở mặt đất, cẩu trục dùng móc cẩu nâng vật liệu lên cao theo phương thẳng đứng và cao hơn 1 m so với vị trí cần đặt, sau đó giữ nguyên độ cao và quay cần nâng một góc $\\alpha \\in (0^\\circ; 180^\\circ)$ sao cho quỹ đạo tạo thành một cung tròn cho đến khi mặt phẳng $(P)$ chứa cần nâng và điểm cần đặt vuông góc với mặt đất. Tiếp đến điều chỉnh xe con nhằm di chuyển và hạ vật liệu xuống 1 m theo phương thẳng đứng đúng vị trí cần đặt. Giả sử trong không gian $Oxyz$, thân tháp là trục $Oz$, mặt đất là mặt phẳng $Oxy$; vị trí ban đầu của vật liệu là $A(6; 8; 0)$ và vị trí cần đặt là $B(4; -3; 15)$. Tính quãng đường vật liệu đã di chuyển (kết quả làm tròn đến hàng phần chục).",
        image: "images/2612OnTNDe3/2612OnTNDe3TLN3.png",
        answer: "37.7",
        explanation: "Quá trình di chuyển gồm 4 chặng: \\n1. Nâng thẳng đứng từ $z=0$ lên $z=15+1=16$ m $\\Rightarrow S_1 = 16$ m.\\n2. Quay cung tròn với bán kính $R = \\sqrt{6^2+8^2}=10$ m. Góc quay $\\alpha$ giữa vị trí hình chiếu đầu $A'(6;8)$ và vị trí đích $B'(4;-3)$ có $\\cos \\alpha = \\dfrac{6\\cdot 4 + 8\\cdot(-3)}{10 \\cdot 5} = 0 \\Rightarrow \\alpha = 90^\\circ = \\dfrac{\\pi}{2}$ rad. Quãng đường quay $S_2 = R\\alpha = 5\\pi \\approx 15,71$ m.\\n3. Di chuyển xe con dọc cần nâng từ khoảng cách $10$ m về khoảng cách $OB' = \\sqrt{4^2+(-3)^2}=5$ m $\\Rightarrow S_3 = |10-5| = 5$ m.\\n4. Hạ thẳng đứng xuống vị trí đặt từ $z=16$ xuống $z=15$ m $\\Rightarrow S_4 = 1$ m.\\nTổng quãng đường: $S = 16 + 5\\pi + 5 + 1 = 22 + 5\\pi \\approx 37,7$ m."
    },
    {
        q: "Anh Hùng thành lập công ty taxi điện và dự định sử dụng không quá 10 xe. Doanh thu của $x$ xe là $D(x)=x^3-4597x^2+50300x+30000$ và chi phí bình quân mỗi xe là $C(x)=3x+300+\\dfrac{30000}{x}$ (triệu đồng). Anh Hùng cần tối ưu bao nhiêu xe để lợi nhuận lớn nhất?",
        answer: "5",
        explanation: "Tổng chi phí vận hành cho $x$ xe là $x \\cdot C(x) = 3x^2 + 300x + 30000$ (triệu đồng). Hàm lợi nhuận thu được: $T(x) = D(x) - x \\cdot C(x) = x^3 - 4600x^2 + 50000x$. Đạo hàm: $T'(x) = 3x^2 - 9200x + 50000 = 0 \\Rightarrow x \\approx 5,44$ (do loại nghiệm lớn ngoài khoảng $[1;10]$). Lập bảng biến thiên trên tập số nguyên, ta so sánh $T(5) = 135125$ và $T(6) = 134616$. Vậy cần tối ưu vận hành 5 xe để đạt lợi nhuận cực đại."
    },
    {
        q: "Khảo sát cho thấy 70\\% học sinh dùng tài liệu trực tuyến. Trong đó 80\\% đạt khá giỏi Toán. Trong số học sinh không dùng tài liệu trực tuyến, 50\\% đạt khá giỏi. Nếu chọn ngẫu nhiên một học sinh đạt khá giỏi, xác suất học sinh này có dùng tài liệu trực tuyến là bao nhiêu? (Làm tròn đến hàng phần trăm).",
        answer: "0.79",
        explanation: "Gọi $T$ là biến cố học sinh dùng tài liệu trực tuyến $\\Rightarrow P(T)=0,7; P(\\bar{T})=0,3$. Gọi $K$ là biến cố học sinh đạt khá giỏi. Ta có $P(K|T)=0,8$ và $P(K|\\bar{T})=0,5$. Xác suất toàn phần để học sinh đạt khá giỏi là $P(K) = 0,7 \\cdot 0,8 + 0,3 \\cdot 0,5 = 0,71$. Áp dụng công thức Bayes, xác suất cần tìm là $P(T|K) = \\dfrac{P(T \\cap K)}{P(K)} = \\dfrac{0,7 \\cdot 0,8}{0,71} = \\dfrac{0,56}{0,71} \\approx 0,79$."
    },
    {
        q: "Trong một dây chuyền sản xuất tự động, một cánh tay robot có nhiệm vụ cắt các thanh vật liệu dài 100 cm thành hai loại linh kiện: loại ngắn dài 2 cm và loại dài dài 5 cm. Cứ mỗi chu kỳ hoạt động, robot sẽ thực hiện một phương án cắt ngẫu nhiên sao cho vừa hết thanh vật liệu (không có phần thừa và có thể chỉ cắt một loại linh kiện). Tính xác suất để trong một chu kỳ, số lượng linh kiện loại 2 cm nhiều hơn số lượng linh kiện loại 5 cm đúng 1 đơn vị (làm tròn kết quả đến hàng phần trăm).",
        answer: "0.09",
        explanation: "Gọi $x, y$ lần lượt là số lượng linh kiện loại 2 cm và 5 cm ($x, y \\in \\mathbb{N}$). Phương trình ràng buộc độ dài: $2x + 5y = 100 \\Rightarrow 5y = 2(50-x) \\Rightarrow y$ là số chẵn. Đặt $y=2k \\Rightarrow x = 50-5k$. Vì $x \\ge 0 \\Rightarrow 0 \\le k \\le 10$. Số phần tử không gian mẫu là $n(\\Omega) = 11$.\\nBiến cố yêu cầu $x - y = 1 \\Leftrightarrow (50-5k) - 2k = 1 \\Leftrightarrow 7k = 49 \\Leftrightarrow k = 7 \\Rightarrow y = 14, x = 15$ (Thỏa mãn duy nhất 1 bộ). Xác suất thu được $P = \\dfrac{1}{11} \\approx 0,09$."
    }
];