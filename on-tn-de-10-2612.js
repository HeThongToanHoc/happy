// DỮ LIỆU ĐỀ 10 - THUỘC HỆ THỐNG IRIS MATH
window.quizData = window.quizData || {};

window.quizData['on-tn-de-10-2612_p1'] = [
    {
        q: "Nghiệm của phương trình $2^{x-1}=3$ là",
        options: [
            "$x=3$",
            "$x=1+\\log_2 3$",
            "$x=\\log_3 6$",
            "$x=2$"
        ],
        answer: 1,
        explanation: "Ta có $2^{x-1}=3 \\Leftrightarrow x-1 = \\log_2 3 \\Leftrightarrow x = 1 + \\log_2 3$."
    },
    {
        q: "Giá trị cực đại của hàm số $f(x)=2x^3-9x^2-24x+1$ là",
        options: [
            "$-1$",
            "$14$",
            "$4$",
            "$111$"
        ],
        answer: 1,
        explanation: "Đạo hàm $f'(x)=6x^2-18x-24$.\\nCho $f'(x)=0 \\Leftrightarrow \\left[ \\begin{array}{l} x=-1 \\\\ x=4 \\end{array} \\right.$.\\nQua $x=-1$, $f'(x)$ đổi dấu từ dương sang âm nên hàm số đạt cực đại tại $x=-1$. Giá trị cực đại tương ứng là $f(-1) = 2(-1)^3-9(-1)^2-24(-1)+1 = 14$."
    },
    {
        q: "Cho lăng trụ $ABC.A'B'C'$. Khẳng định nào sau đây **đúng**?",
        options: [
            "$\\overrightarrow{BA}+\\overrightarrow{A'C'}=\\overrightarrow{BC}$",
            "$\\overrightarrow{BA}+\\overrightarrow{A'C'}=\\overrightarrow{BC'}$",
            "$\\overrightarrow{BA}+\\overrightarrow{A'C'}=\\overrightarrow{C'B}$",
            "$\\overrightarrow{BA}+\\overrightarrow{A'C'}=\\overrightarrow{B'C}$"
        ],
        answer: 1,
        explanation: "Trong lăng trụ $ABC.A'B'C'$, hai đáy song song và bằng nhau nên ta có $\\overrightarrow{A'C'} = \\overrightarrow{AC}$.\\nKhi đó áp dụng quy tắc ba điểm: $\\overrightarrow{BA} + \\overrightarrow{A'C'} = \\overrightarrow{BA} + \\overrightarrow{AC} = \\overrightarrow{BC}$."
    },
    {
        q: "Cho hàm số $y=f(x)$ xác định trên $[-1;6]$ và có đồ thị như hình vẽ. Hàm số đã cho nghịch biến trên khoảng nào sau đây?",
        image: "images/2612OnTNDe10/2612OnTNDe10TN4.png",
        options: [
            "$(-1;2)$",
            "$(0;2)$",
            "$(2;6)$",
            "$(-2;0)$"
        ],
        answer: 1,
        explanation: "Dựa vào đồ thị, trên khoảng $(0;2)$ đường cong đi xuống từ trái sang phải, do đó hàm số nghịch biến trên khoảng $(0;2)$."
    },
    {
        q: "Trong không gian, cho ba véc-tơ $\\overrightarrow{a}, \\overrightarrow{b}, \\overrightarrow{c}$ và số thực $k$. Khẳng định nào sau đây **sai**?",
        options: [
            "$\\overrightarrow{a} \\cdot \\overrightarrow{b} = \\overrightarrow{b} \\cdot \\overrightarrow{a}$",
            "$\\left(\\overrightarrow{a} \\cdot \\overrightarrow{b}\\right)^2 = \\overrightarrow{a}^2 \\cdot \\overrightarrow{b}^2$",
            "$\\overrightarrow{a} \\cdot \\left(\\overrightarrow{b} + \\overrightarrow{c}\\right) = \\overrightarrow{a} \\cdot \\overrightarrow{b} + \\overrightarrow{a} \\cdot \\overrightarrow{c}$",
            "$\\left(k\\overrightarrow{a}\\right) \\cdot \\overrightarrow{b} = k\\left(\\overrightarrow{a} \\cdot \\overrightarrow{b}\\right) = \\overrightarrow{a} \\cdot \\left(k\\overrightarrow{b}\\right)$"
        ],
        answer: 1,
        explanation: "Ta có $\\left(\\overrightarrow{a} \\cdot \\overrightarrow{b}\\right)^2 = \\left[|\\overrightarrow{a}| \\cdot |\\overrightarrow{b}| \\cdot \\cos(\\overrightarrow{a}, \\overrightarrow{b})\\right]^2$. Đẳng thức $\\left(\overrightarrow{a} \\cdot \\overrightarrow{b}\\right)^2=\\overrightarrow{a}^2 \\cdot \\overrightarrow{b}^2$ chỉ xảy ra khi $\\cos^2(\\overrightarrow{a}, \\overrightarrow{b}) = 1$, tức là hai véc-tơ cùng phương. Do đó khẳng định tổng quát trên là sai."
    },
    {
        q: "Cho cấp số cộng $(u_n)$ với $u_1=-1$, công sai $d=3$. Tổng năm số hạng đầu tiên của cấp số cộng đó bằng",
        options: [
            "$11$",
            "$25$",
            "$5$",
            "$50$"
        ],
        answer: 1,
        explanation: "Tổng $5$ số hạng đầu tiên được tính theo công thức: $S_5 = \\dfrac{5 \\cdot [2u_1 + (5-1)d]}{2} = \\dfrac{5 \\cdot [2 \\cdot (-1) + 4 \\cdot 3]}{2} = 25$."
    },
    {
        q: "Giá trị nhỏ nhất của hàm số $f(x)=x^4-8x^2+a$, ($a \\in \\mathbb{R}$) trên đoạn $[-1;3]$ bằng",
        options: [
            "$-6$",
            "$a$",
            "$-16+a$",
            "$9+a$"
        ],
        answer: 2,
        explanation: "Đạo hàm $f'(x)=4x^3-16x$; $f'(x)=0 \\Leftrightarrow 4x(x^2-4)=0 \\Leftrightarrow x=0$ hoặc $x=2$ (loại nghiệm $x=-2$ do không thuộc đoạn $[-1;3]$).\\nTính giá trị tại các biên và điểm cực trị: $f(-1) = a-7$, $f(0) = a$, $f(2) = a-16$, $f(3) = a+9$.\\nSo sánh các giá trị, ta được $\\min\\limits_{[-1;3]} f(x) = f(2) = a-16 = -16+a$."
    },
    {
        q: "Cho hàm số $y=f(x)$ xác định trên đoạn $[-1;5]$ và có đồ thị như hình vẽ. Tập giá trị của hàm số $y=f(x)$ trên đoạn $[-1;5]$ là",
        image: "images/2612OnTNDe10/2612OnTNDe10TN8.png",
        options: [
            "$[-1;5]$",
            "$[1;3]$",
            "$[-1;3]$",
            "$[1;5]$"
        ],
        answer: 2,
        explanation: "Tập giá trị của hàm số trên một đoạn tương ứng là khoảng giá trị từ giá trị nhỏ nhất đến giá trị lớn nhất của đồ thị chiếu lên trục tung. Dựa vào đồ thị ta thấy $m = -1$ và $M = 3$, tập giá trị là $[-1;3]$."
    },
    {
        q: "Mỗi ngày bác Bình đều đi bộ để rèn luyện sức khỏe. Quãng đường đi bộ mỗi ngày (đơn vị: km) của bác Bình trong 20 ngày được thống kê ở bảng sau: <br><table border='1' style='border-collapse:collapse; text-align:center; width:100%; max-width:500px; margin:10px auto;'><tr><td>Quãng đường</td><td>$[2{,}7;3{,}0)$</td><td>$[3{,}0;3{,}3)$</td><td>$[3{,}3;3{,}6)$</td><td>$[3{,}6;3{,}9)$</td><td>$[3{,}9;4{,}2)$</td></tr><tr><td>Số ngày</td><td>3</td><td>6</td><td>5</td><td>4</td><td>2</td></tr></table> Khoảng biến thiên của mẫu số liệu ghép nhóm trên bằng",
        options: [
            "$1{,}2$",
            "$0{,}362$",
            "$13{,}39$",
            "$1{,}5$"
        ],
        answer: 3,
        explanation: "Khoảng biến thiên của mẫu số liệu ghép nhóm được tính bằng hiệu giữa đầu mút phải của nhóm cuối cùng và đầu mút trái của nhóm đầu tiên: $R = 4{,}2 - 2{,}7 = 1{,}5$."
    },
    {
        q: "Trong không gian $Oxyz$, cho các điểm $A(1;1;2)$, $B(3;1;0)$. Trung điểm của đoạn thẳng $AB$ có tọa độ là",
        options: [
            "$(2;1;1)$",
            "$(4;2;2)$",
            "$(2;0;-2)$",
            "$(1;0;-1)$"
        ],
        answer: 0,
        explanation: "Tọa độ trung điểm $M$ của đoạn thẳng $AB$ là: $x_M = \\dfrac{1+3}{2} = 2$; $y_M = \\dfrac{1+1}{2} = 1$; $z_M = \\dfrac{2+0}{2} = 1 \\Rightarrow M(2;1;1)$."
    },
    {
        q: "Đường tiệm cận xiên của đồ thị hàm số $y=\\dfrac{x^2+2x-2}{x-2}$ là",
        options: [
            "$y=-x+3$",
            "$y=x+3$",
            "$y=x-3$",
            "$y=x+4$"
        ],
        answer: 3,
        explanation: "Thực hiện chia tử số cho mẫu số ta được: $y = x + 4 + \\dfrac{6}{x-2}$.\\nVì $\\lim\\limits_{x \\to \\infty} \\dfrac{6}{x-2} = 0$, nên đường thẳng $y=x+4$ là tiệm cận xiên của đồ thị hàm số."
    },
    {
        q: "Trong không gian $Oxyz$, cho điểm $A(-3;1;-4)$, $B(1;-5;2)$. Đường thẳng $AB$ cắt mặt phẳng $(Oxy)$ tại điểm",
        options: [
            "$M\\left(-\\dfrac{1}{3};-3;0\\right)$",
            "$M\\left(\\dfrac{1}{3};3;0\\right)$",
            "$P(0;3;1)$",
            "$Q(-3;1;0)$"
        ],
        answer: 0,
        explanation: "Véc-tơ chỉ phương $\\overrightarrow{AB} = (4;-6;6) = 2(2;-3;3) \\Rightarrow$ Phương trình tham số của $AB$: $\\left\\{ \\begin{array}{l} x=-3+2t \\\\ y=1-3t \\\\ z=-4+3t \\end{array} \\right.$.\\nGiao điểm $M$ với mặt phẳng $(Oxy)$ có cao độ $z = 0 \\Leftrightarrow -4+3t=0 \\Leftrightarrow t = \\dfrac{4}{3}$. Thế vào ta được $M\\left(-\\dfrac{1}{3};-3;0\right)$."
    }
];

window.quizData['on-tn-de-10-2612_p2'] = [
    {
        q: "Cho hàm số $y=f(x)$ liên tục trên $\\mathbb{R}$ và có bảng biến thiên. Xét tính đúng sai của các khẳng định sau:",
        image: "images/2612OnTNDe10/2612OnTNDe10DS1.png",
        sub_questions: [
            { text: "Đồ thị hàm số đã cho có hai đường tiệm cận ngang", correct: true },
            { text: "Giá trị nhỏ nhất của hàm số trên $(-\\infty ;+\\infty)$ bằng 8", correct: true },
            { text: "Hàm số đồng biến trên khoảng $(8 ; 38)$", correct: false },
            { text: "Giá trị lớn nhất của hàm số trên $\\mathbb{R}$ bằng 142", correct: false }
        ],
        explanation: "- Mệnh đề 1 ĐÚNG vì $\\lim\\limits_{x \\to-\\infty} f(x)=142 \\Rightarrow y=142$ là một TCN, và $\\lim\\limits_{x \\to+\\infty} f(x)=14 \\Rightarrow y=14$ là một TCN khác.\\n- Mệnh đề 2 ĐÚNG vì dựa vào bảng biến thiên, cực tiểu $f(-1)=8$ cũng là giá trị thấp nhất của hàm số trên toàn bộ trục số.\\n- Mệnh đề 3 SAI vì hàm số đồng biến trên khoảng $(-1;1)$, khoảng $(8;38)$ không thuộc miền đồng biến này.\\n- Mệnh đề 4 SAI vì $\\lim\\limits_{x \\to-\\infty} f(x)=142$ nhưng đồ thị chỉ tiệm cận sát chứ không đạt đến hằng số này tại điểm hữu hạn, hàm số không có GTLN trên $\\mathbb{R}$."
    },
    {
        q: "Trong không gian $Oxyz$, xem mặt đất là mặt phẳng $(Oxy)$; trục $Oz$ hướng lên (đơn vị: km). Tại cùng một thời điểm, radar phát hiện máy bay tại $A(0; 0; 10)$ bay theo hướng không đổi $\\vec{v}=(-4; 3; 0)$ và một xe tăng tại gốc $O$ di chuyển theo hướng không đổi $\\vec{u}=(3; 4; 0)$. Sau 20 giây, vị trí máy bay ở $B(-8; 6; 10)$ và xe tăng ở $E\\left(\\dfrac{3}{20}; \\dfrac{1}{5}; 0\\right)$. Xét tính đúng sai:",
        sub_questions: [
            { text: "Nếu giữ nguyên hướng và vận tốc thì 10 giây tiếp theo vị trí máy bay và xe tăng lần lượt là $C(-12; 9; 10)$, $F\\left(\\dfrac{9}{40}; \\dfrac{3}{10}; 0\\right)$", correct: true },
            { text: "Khoảng cách giữa máy bay và xe tăng sau 20 giây kể từ lúc phát hiện là 15 km (làm tròn kết quả đến hàng đơn vị)", correct: false },
            { text: "Vận tốc trung bình của xe tăng trong 20 giây đầu tiên là 12,5 m/s", correct: true },
            { text: "Khi máy bay cách $A$ một khoảng 27 km với tốc độ lúc đó 1.800 km/h, đồng thời xe tăng cách $O$ 1 km với tốc độ 60 km/h và cả hai giữ nguyên hướng ban đầu, tốc độ thay đổi khoảng cách giữa chúng lúc này là 1.689 km/h (làm tròn đến hàng đơn vị)", correct: true }
        ],
        explanation: "- Mệnh đề 1 ĐÚNG vì 10 giây tiếp theo bằng một nửa khoảng thời gian 20 giây đầu, áp dụng tính chất vectơ $\\overrightarrow{AB} = 2\\overrightarrow{BC}$ và $\\overrightarrow{OE} = 2\\overrightarrow{EF}$ tính được tọa độ $C$ và $F$ hoàn toàn chính xác.\\n- Mệnh đề 2 SAI vì tính khoảng cách $BE = \\sqrt{\\left(\\dfrac{3}{20}+8\\right)^2+\\left(\dfrac{1}{5}-6\\right)^2+(-10)^2} \\approx 14$ km.\\n- Mệnh đề 3 ĐÚNG vì quãng đường xe tăng đi được là độ dài đoạn $OE = 0,25 \\text{ km} = 250 \\text{ m}$, vận tốc trung bình bằng $250 / 20 = 12,5$ m/s.\\n- Mệnh đề 4 ĐÚNG vì thiết lập biểu thức hàm khoảng cách theo thời gian $t$: $DK = f(t)$. Thời gian đạt được trạng thái mốc là $t = 27/1800 = 0,015$ giờ. Đạo hàm tốc độ biến thiên khoảng cách tại thời điểm này cho kết quả làm tròn bằng 1.689 km/h."
    },
    {
        q: "Cho hình chóp $S.ABC$ có tam giác $ABC$ vuông tại $B$, $BC=3, AB=2$, cạnh bên $SA$ vuông góc với mặt phẳng $(ABC)$ và $SA=2$. Xét tính đúng sai của các khẳng định sau:",
        sub_questions: [
            { text: "Thể tích khối chóp $S.ABC$ bằng 6", correct: false },
            { text: "Khoảng cách từ $C$ đến mặt phẳng $(SAB)$ bằng 5", correct: false },
            { text: "Số đo góc nhị diện $[S, BC, A]$ bằng $45^{\\circ}$", correct: true },
            { text: "Tích vô hướng $\\vec{SB} \\cdot \\vec{AC}=4$", correct: true }
        ],
        explanation: "- Mệnh đề 1 SAI vì diện tích đáy $S_{ABC} = \\dfrac{1}{2} \\cdot 3 \\cdot 2 = 3 \\Rightarrow V = \\dfrac{1}{3} \\cdot 3 \\cdot 2 = 2$.\\n- Mệnh đề 2 SAI vì có $BC \\perp AB$ và $BC \\perp SA \\Rightarrow BC \\perp (SAB) \\Rightarrow \\mathrm{d}(C, (SAB)) = BC = 3$.\\n- Mệnh đề 3 ĐÚNG vì góc phẳng nhị diện tương ứng chính là $\\widehat{SBA}$. Xét tam giác vuông cân $SAB$ tại $A$ có $SA=AB=2 \\Rightarrow \\widehat{SBA} = 45^\\circ$.\\n- Mệnh đề 4 ĐÚNG vì chèn điểm biến đổi tích vô hướng: $\\vec{SB} \\cdot \\vec{AC} = (\\vec{SA} + \\vec{AB}) \\cdot \\vec{AC} = 0 + \\vec{AB} \\cdot \\vec{AC} = AB \\cdot AC \\cdot \\cos\\widehat{BAC} = AB^2 = 2^2 = 4$."
    },
    {
        q: "Khảo sát chiều cao của 20 học sinh nam lớp 12A của một trường THPT X, người ta được kết quả thống kê trong bảng sau: <br><table border='1' style='border-collapse:collapse; text-align:center; width:100%; max-width:500px; margin:10px auto;'><tr><td>Chiều cao (cm)</td><td>$[160; 165)$</td><td>$[165; 170)$</td><td>$[170; 175)$</td><td>$[175; 180)$</td><td>$[180; 185)$</td></tr><tr><td>Số học sinh</td><td>3</td><td>5</td><td>7</td><td>4</td><td>1</td></tr></table> Xét tính đúng sai của các khẳng định sau:",
        sub_questions: [
            { text: "Gọi $x_1; x_2; \\dots; x_{20}$ là mẫu số liệu gốc gồm chiều cao của 20 học sinh trên được xếp theo thứ tự không giảm. Khi đó $x_3 \\in [165 ; 170)$ và $x_9 \\in [170 ; 175)$", correct: false },
            { text: "Tứ phân vị thứ ba của mẫu số liệu ghép nhóm đã cho bằng 175", correct: true },
            { text: "Khoảng tứ phân vị của mẫu số liệu ghép nhóm đã cho bằng 8,5", correct: false },
            { text: "Chọn ngẫu nhiên một học sinh trong nhóm khảo sát nói trên, xác suất chọn được học sinh có chiều cao từ 175 cm trở lên bằng 0,25", correct: true }
        ],
        explanation: "- Mệnh đề 1 SAI vì tần số nhóm $[160;165)$ bằng 3, nghĩa là $x_1, x_2, x_3$ đều thuộc nhóm $[160;165) \\Rightarrow x_3 \\notin [165;170)$. Nhóm tiếp theo $[165;170)$ chứa từ $x_4$ đến $x_8$. Nhóm $[170;175)$ chứa từ $x_9$ đến $x_{15} \\Rightarrow x_9 \\in [170;175)$ là đúng.\\n- Mệnh đề 2 ĐÚNG vì cỡ mẫu $n=20$, vị trí của tứ phân vị thứ ba là $\\dfrac{3n}{4} = 15$. Tần số tích lũy đến hết nhóm $[170;175)$ vừa vặn bằng $3+5+7=15$. Theo công thức cấu trúc giới hạn nhóm, ta có $Q_3 = 175$.\\n- Mệnh đề 3 SAI vì vị trí tứ phân vị thứ nhất là $\\dfrac{n}{4} = 5$, thuộc nhóm $[165;170) \\Rightarrow Q_1 = 165 + \\dfrac{5-3}{5} \\cdot 5 = 167$. Khoảng tứ phân vị: $\\Delta Q = Q_3 - Q_1 = 175 - 167 = 8 \\neq 8,5$.\\n- Mệnh đề 4 ĐÚNG vì số học sinh có chiều cao từ 175 cm trở lên thuộc 2 nhóm cuối là $4+1=5$ học sinh. Xác suất bốc ngẫu nhiên tương ứng bằng: $P = \\dfrac{5}{20} = 0,25$."
    }
];

window.quizData['on-tn-de-10-2612_p3'] = [
    {
        q: "Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác đều có cạnh bằng 1 và cạnh bên $AA'=\\sqrt{2}$. Tính khoảng cách giữa hai đường thẳng chéo nhau $A'B$ và $B'C$ (kết quả cuối cùng được làm tròn đến hàng phần trăm).",
        answer: "0.47",
        explanation: "Chọn hệ trục tọa độ $Oxyz$ đặt gốc tại $A(0;0;0)$. Khi đó xác định tọa độ các điểm thành phần: $A'\\left(0;0;\\sqrt{2}\\right)$, $C(1;0;0)$, và đỉnh tam giác đều $B\\left(\\dfrac{1}{2}; \\dfrac{\\sqrt{3}}{2}; 0\\right) \\Rightarrow B'\\left(\\dfrac{1}{2}; \\dfrac{\\sqrt{3}}{2}; \\sqrt{2}\\right)$.\\nTa tìm được hai vectơ chỉ phương: $\\overrightarrow{A'B} = \\left(\\dfrac{1}{2}; \\dfrac{\\sqrt{3}}{2}; -\\sqrt{2}\\right)$ và $\\overrightarrow{B'C} = \\left(\\dfrac{1}{2}; -\\dfrac{\\sqrt{3}}{2}; -\\sqrt{2}\\right)$.\\nÁp dụng công thức khoảng cách giữa hai đường thẳng chéo nhau thông qua tích hỗn tạp: $d = \\dfrac{\\left|\\left[\\overrightarrow{A'B}, \\overrightarrow{B'C}\\right] \\cdot \\overrightarrow{A'C}\\right|}{\\left|\\left[\\overrightarrow{A'B}, \\overrightarrow{B'C}\\right]\\right|} \\approx 0,47$."
    },
    {
        q: "Một nhà phân phối có thể thuê tối đa 3 chiếc xe tải loại A và 8 chiếc xe tải loại B để vận chuyển 100 chiếc máy giặt. Mỗi xe loại A chở được tối đa 20 máy giặt với giá cước 3 triệu đồng mỗi chuyến, mỗi xe loại B chở được tối đa 10 máy giặt với giá cước 2 triệu đồng mỗi chuyến. Nếu mỗi xe chỉ chở nhiều nhất một chuyến, số tiền cước tối thiểu (triệu đồng) mà nhà phân phối phải trả là bao nhiêu?",
        answer: "17",
        explanation: "Gọi số xe loại A và B lần lượt thuê là $x, y$ nguyên dương thỏa mãn điều kiện biên: $0 \\le x \\le 3, 0 \\le y \\le 8$. Phương trình ràng buộc khối lượng vận chuyển hàng hóa quy hoạch tuyến tính: $20x + 10y \\ge 100 \\Leftrightarrow 2x + y \\ge 10$.\\nHàm mục tiêu chi phí giá cước: $F(x,y) = 3x + 2y$.\\nBiển diễn miền nghiệm hình học thu được miền nghiệm tam giác có các đỉnh tọa độ là $A(1;8), B(3;8), C(3;4)$.\\nSo sánh giá trị tại các đỉnh đa giác: $F(A)=19, F(B)=25, F(C)=3(3)+2(4)=17$. Vậy giá tiền cước tối thiểu cần trả là 17 triệu đồng khi thuê 3 xe loại A và 4 xe loại B."
    },
    {
        q: "Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(-4;-1;2)$, $B(3;5;-6)$ và $C(a;b;c)$. Biết trung điểm cạnh $AC$ thuộc trục tung, trung điểm cạnh $BC$ thuộc mặt phẳng $(Oxz)$. Tính giá trị của biểu thức $T=2a+b-c$.",
        answer: "5",
        explanation: "Trung điểm cạnh $AC$ là $M\\left(\\dfrac{a-4}{2}; \\dfrac{b-1}{2}; \\dfrac{c+2}{2}\right)$. Vì $M \\in Oy \\Rightarrow x_M=0, z_M=0 \\Rightarrow a=4, c=-2$.\\nTrung điểm cạnh $BC$ là $N\\left(\\dfrac{a+3}{2}; \\dfrac{b+5}{2}; \\dfrac{c-6}{2}\right)$. Vì $N \\in (Oxz) \\Rightarrow y_N=0 \\Rightarrow b=-5$.\\nThay các giá trị vừa tìm được vào biểu thức ta được: $T = 2(4) + (-5) - (-2) = 5$."
    },
    {
        q: "Một giờ hoạt động ngoài trời, cô giáo cho 35 học sinh lớp mình nắm tay nhau xếp thành một vòng tròn. Sau đó, cô gọi tên ngẫu nhiên 6 học sinh ra giữa vòng để chơi trò chơi. Xác suất 6 em được gọi tên không có hai em nào đứng cạnh nhau trong vòng tròn bằng $a$. Tính giá trị của biểu thức $11594a$.",
        answer: "4095",
        explanation: "Không gian mẫu chọn 6 học sinh từ 35 học sinh là $n(\\Omega) = C_{35}^6 = 1623160$.\\nSử dụng bài toán chia kẹo Euler (vách ngăn) cho mô hình vòng tròn: Giả sử xếp 35 em hàng ngang, số cách chọn 6 em không kề nhau tạo từ 30 khoảng trống của 29 em còn lại là $C_{30}^6 = 593775$. Khi uốn cong thành vòng tròn, trường hợp em đầu hàng và cuối hàng cùng được chọn sẽ trở thành kề nhau, cần loại trừ đi: cố định 2 em đầu cuối, chọn 4 em xếp vào 28 khoảng trống ở giữa có $C_{28}^4 = 20475$ cách.\\nSố cách chọn thỏa mãn vòng tròn: $n(A) = 593775 - 20475 = 573300$ cách.\\nXác suất tương ứng $a = \\dfrac{573300}{1623160} = \\dfrac{4095}{11594} \\Rightarrow 11594a = 4095$."
    },
    {
        q: "Bà Bích treo một bức tranh hình chữ nhật $ABCD$ kích thước 20 cm $\\times$ 40 cm trên tường phòng khách. Để tăng điểm nhấn, bà trang trí một khung hình cách điệu hình chữ nhật $MNPQ$ sao cho các điểm $A, B, C, D$ lần lượt thuộc các cạnh $QM, MN, NP, PQ$. Hỏi diện tích chiếm chỗ lớn nhất của hình chữ nhật $MNPQ$ trên tường nhà bằng bao nhiêu centimet vuông?",
        image: "images/2612OnTNDe10/2612OnTNDe10TLN5.png",
        answer: "1800",
        explanation: "Dựa vào tính chất đồng dạng và đối xứng của cấu hình chữ nhật nội tiếp chữ nhật, ta có các tam giác vuông ở 4 góc đồng dạng và đôi một bằng nhau: $\\triangle ADQ = \\triangle CBN$ và $\\triangle ABM = \\triangle DCP$. Tỷ số đồng dạng giữa hai cạnh chữ nhật tranh gốc là $\\dfrac{AD}{AB} = \\dfrac{40}{20} = 2 \\Rightarrow S_{\\triangle ADQ} = 4S_{\\triangle ABM}$.\\nDiện tích hình khung lớn ngoài: $S_{MNPQ} = S_{ABCD} + 2(S_{\\triangle ADQ} + S_{\\triangle ABM}) = S_{ABCD} + 10S_{\\triangle ABM}$.\\nDiện tích khung ngoài đạt giá trị lớn nhất khi diện tích góc tam giác lớn nhất, xảy ra khi góc nghiêng cấu trúc làm tam giác $\\triangle ABM$ vuông cân tại $M \\Rightarrow S_{\\triangle ABM} = \\dfrac{1}{4}AB^2$.\\nDiện tích cực đại bằng: $S_{\\max} = 10 \\cdot \\left(\\dfrac{1}{4} \\cdot 20^2\\right) + (20 \\cdot 40) = 1000 + 800 = 1800 \\text{ cm}^2$."
    },
    {
        q: "Ông An có một thanh đá thạch anh dạng hình lăng trụ đứng $OAB.O'A'B'$, trong đó $OA=OB=2$ dm, $\\widehat{AOB}=120^\\circ, OO'=4$ dm. Ông thuê thợ phân chia thanh đá thành ba phần bởi hai mặt phẳng $(CAB)$ và $(DAB)$ sao cho $\\triangle CAB$ vuông và $\\triangle DAB$ đều, rồi làm quả cầu pha lê ngoại tiếp khối tứ diện thạch anh $ABCD$. Giá tiền hoàn thiện tính bằng hằng số hạch toán $\\left(V_{ABCD}^2+{R^2}\\right) \\cdot 60.000$ đồng. Hỏi ông An phải trả bao nhiêu nghìn đồng?",
        image: "images/2612OnTNDe10/2612OnTNDe10TLN6.png",
        answer: "1030",
        explanation: "Gọi $M$ là trung điểm $AB$. Tính các cạnh tam giác: đáy hình cân cho ra $AB = 2\\sqrt{3}$. Do $\\triangle CAB$ vuông (bắt buộc vuông tại $C$ do đối xứng) $\\Rightarrow CM = \\dfrac{1}{2}AB = \\sqrt{3} \\Rightarrow CA=CB=\\sqrt{6}$. Do $\\triangle DAB$ đều $\\Rightarrow DM = \\dfrac{AB\\sqrt{3}}{2} = 3 \\Rightarrow DA=DB=2\\sqrt{3}$.\\nDiện tích các mặt phẳng: $S_{OAB} = \\sqrt{3}, S_{CAB}=3, S_{DAB}=3\\sqrt{3}$. Định lý hình chiếu diện tích lên đáy cho biết góc nghiêng mặt bên: $\\cos\\widehat{CMO} = \\dfrac{\\sqrt{3}}{3} \\Rightarrow \\sin\\widehat{CMO}=\\dfrac{\\sqrt{6}}{3}$ và $\\cos\\widehat{DMO} = \\dfrac{\\sqrt{3}}{3\\sqrt{3}}=\\dfrac{1}{3} \\Rightarrow \\sin\\widehat{DMO}=\\dfrac{2\\sqrt{2}}{3}$.\\nGóc nhị diện giữa hai mặt phẳng $\\alpha = \\widehat{DMO} - \\widehat{CMO} \\Rightarrow \\cos\\alpha = \\dfrac{5\\sqrt{3}}{9} \\Rightarrow \\sin\\alpha = \\dfrac{\\sqrt{6}}{9}$.\\nĐường cao hạ từ $C$ xuống $(ABD)$ là $CH = CM\\sin\\alpha = \\dfrac{3\\sqrt{2}}{9} = \\dfrac{\\sqrt{2}}{3}$. Thể tích khối tứ diện: $V = \\dfrac{1}{3} \\cdot \\dfrac{\\sqrt{2}}{3} \\cdot 3\\sqrt{3} = \\dfrac{\\sqrt{6}}{3} \\Rightarrow V^2 = \\dfrac{2}{3}$.\\nTính bán kính mặt cầu ngoại tiếp $R$: Gọi $I$ là tâm cầu, hình chiếu rơi trên trục đường tròn ngoại tiếp của hai tam giác mặt bên. Khoảng cách tính từ tâm tâm mặt đến tâm trục $GI = GM\\cot\\alpha = 1 \\cdot \\dfrac{5\\sqrt{2}}{2}$. Bán kính cầu bình phương: $R^2 = DG^2 + GI^2 = 2^2 + \\dfrac{50}{4} = \\dfrac{33}{2}$.\\nTổng chi phí tính ra nghìn đồng: $\\left(\\dfrac{2}{3} + \\dfrac{33}{2}\right) \\cdot 60 = 40 + 990 = 1030$ nghìn đồng."
    }
];