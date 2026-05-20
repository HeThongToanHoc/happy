// DỮ LIỆU ĐỀ 7 - THUỘC HỆ THỐNG IRIS MATH
window.quizData = window.quizData || {};

window.quizData['on-tn-de-7-2612_p1'] = [
    {
        q: "Trong không gian với hệ tọa độ $Oxyz$, tích vô hướng của hai véc tơ $\\overrightarrow{a}=(2;-1; 3)$ và $\\overrightarrow{b}=(4;-8; 3)$ bằng bao nhiêu?",
        options: [
            "$\\overrightarrow{a} \\cdot \\overrightarrow{b}=5$",
            "$\\overrightarrow{a} \\cdot \\overrightarrow{b}=\\sqrt{53}$",
            "$\\overrightarrow{a} \\cdot \\overrightarrow{b}=3$",
            "$\\overrightarrow{a} \\cdot \\overrightarrow{b}=25$"
        ],
        answer: 3,
        explanation: "Ta có: $\\overrightarrow{a} \\cdot \\overrightarrow{b} = 2 \\cdot 4 + (-1) \\cdot (-8) + 3 \\cdot 3 = 8 + 8 + 9 = 25$."
    },
    {
        q: "Cho $f(x)$ là hàm số bậc ba có $f'(x)=3(x+2)(x-3)$, khẳng định nào dưới đây **sai**?",
        options: [
            "Hàm số $f(x)$ có hai điểm cực trị",
            "Hàm số $f(x)$ đạt cực đại tại điểm $x_0=-2$",
            "Hàm số $f(x)$ đạt cực tiểu tại điểm $x_0=3$",
            "Hàm số $f(x)$ đạt cực tiểu tại điểm $x_0=-2$"
        ],
        answer: 3,
        explanation: "Giải $f'(x)=0\\Leftrightarrow\\left[ \\begin{array}{l} x=-2 \\\\ x=3 \\end{array} \\right.$. Qua $x=-2$, $f'(x)$ đổi dấu từ dương sang âm nên $x=-2$ là điểm cực đại. Qua $x=3$, $f'(x)$ đổi dấu từ âm sang dương nên $x=3$ là điểm cực tiểu. Vậy khẳng định hàm số đạt cực tiểu tại $x_0=-2$ là sai."
    },
    {
        q: "Điểm nào dưới đây thuộc đường tiệm cận xiên của hàm số $y=-2x+1+\\dfrac{3}{x+2}$?",
        options: [
            "$M(1; 1)$",
            "$N(1;-1)$",
            "$P(1; 0)$",
            "$Q(1;-2)$"
        ],
        answer: 1,
        explanation: "Vì $\\lim\\limits_{x \\to \\pm\\infty} \\dfrac{3}{x+2} = 0$ nên đồ thị hàm số có tiệm cận xiên là đường thẳng $y=-2x+1$.\\nTọa độ điểm $N(1;-1)$ thỏa mãn phương trình tiệm cận xiên vì $-1 = -2(1) + 1$."
    },
    {
        q: "Trong không gian với hệ tọa độ $Oxyz$, khoảng cách từ điểm $A(-3;-6; 2)$ đến mặt phẳng tọa độ $(Oxz)$ là",
        options: [
            "$3$",
            "$6$",
            "$2$",
            "$7$"
        ],
        answer: 1,
        explanation: "Mặt phẳng tọa độ $(Oxz)$ có phương trình là $y=0$.\\nKhoảng cách từ điểm $A(-3;-6; 2)$ đến mặt phẳng $(Oxz)$ là: $\\mathrm{d}(A,(Oxz))=\\dfrac{\\big|-6\\big|}{\\sqrt{0^2+1^2+0^2}}=6$."
    },
    {
        q: "Giá trị lớn nhất của hàm số $f(x)=\\dfrac{2x-3}{x+1}$ trên đoạn $[0; 2]$ là",
        options: [
            "$-3$",
            "$3$",
            "$\\dfrac{1}{3}$",
            "$1$"
        ],
        answer: 2,
        explanation: "Tập xác định: $\\mathscr{D}=\\mathbb{R} \\setminus\\{-1\\}$.\\nCó $f'(x)=\\dfrac{2(1)-(-3)(1)}{(x+1)^2} = \\dfrac{5}{(x+1)^2} > 0, \\forall x \\in [0;2]$.\\nSuy ra hàm số đồng biến trên đoạn $[0;2]$, do đó $\\max\\limits_{[0;2]} f(x)=f(2)=\\dfrac{2(2)-3}{2+1}=\\dfrac{1}{3}$."
    },
    {
        q: "Trong không gian với hệ tọa độ $Oxyz$, cho các điểm $M$ và $N$ thoả mãn các điều kiện sau: $\\overrightarrow{OM}=2\\overrightarrow{i}-3\\overrightarrow{j}+\\overrightarrow{k};\\ \\overrightarrow{ON}=5\\overrightarrow{j}-2\\overrightarrow{k}$. Toạ độ của vectơ $\\overrightarrow{MN}$ là",
        options: [
            "$(2;-8; 3)$",
            "$(3; 3;-3)$",
            "$(-2; 8;-3)$",
            "$(-3;-3; 3)$"
        ],
        answer: 2,
        explanation: "Từ giả thiết suy ra tọa độ các điểm là $M(2;-3; 1)$ và $N(0; 5;-2)$.\\nToạ độ của vectơ $\\overrightarrow{MN} = (0-2; 5-(-3); -2-1) = (-2; 8;-3)$."
    },
    {
        q: "Cho $0 < a \\ne 1$. Giá trị của biểu thức $P = \\log_a \\left( a\\cdot\\sqrt[3]{a^2} \\right)$ là",
        options: [
            "$a^{\\frac{5}{3}}$",
            "$\\dfrac{5}{3}$",
            "$\\dfrac{4}{3}$",
            "$\\dfrac{5}{2}$"
        ],
        answer: 1,
        explanation: "Sử dụng tính chất lũy thừa ta có: $P = \\log_a \\left( a \\cdot a^{\\frac{2}{3}} \\right) = \\log_a a^{1 + \\frac{2}{3}} = \\log_a a^{\\frac{5}{3}} = \\dfrac{5}{3}$."
    },
    {
        q: "Cho cấp số nhân $(u_n)$ có $u_1 = 9$, $u_2 = 3$. Số hạng $u_5$ của cấp số nhân là",
        options: [
            "$u_5 = 243$",
            "$u_5 = 81$",
            "$u_5 = \\dfrac{1}{9}$",
            "$u_5 = \\dfrac{1}{81}$"
        ],
        answer: 2,
        explanation: "Công bội của cấp số nhân là $q = \\dfrac{u_2}{u_1} = \\dfrac{3}{9} = \\dfrac{1}{3}$.\\nSố hạng thứ 5 cần tìm là: $u_5 = u_1 \\cdot q^4 = 9 \\cdot \\left(\\dfrac{1}{3}\\right)^4 = 9 \\cdot \\dfrac{1}{81} = \\dfrac{1}{9}$."
    },
    {
        q: "Trong không gian với hệ trục tọa độ $Oxyz$, cho hình bình hành $ABCD$ có điểm $A(1; 2;-3)$, $C(2; 0; 1)$, $D(-5; 2; 1)$. Tìm tọa độ đỉnh $B$.",
        options: [
            "$(8; 0;-3)$",
            "$(-6; 4;-3)$",
            "$(-4; 0; 5)$",
            "$(-2; 4;-1)$"
        ],
        answer: 0,
        explanation: "Gọi $B(x;y;z)$. Vì $ABCD$ là hình bình hành nên $\\overrightarrow{AB}=\\overrightarrow{DC}$.\\nTa có $\\overrightarrow{AB}=(x-1; y-2; z+3)$ và $\\overrightarrow{DC}=(2-(-5); 0-2; 1-1) = (7;-2; 0)$.\\nDo đó: $\\left\\{ \\begin{array}{l} x-1=7 \\\\ y-2=-2 \\\\ z+3=0 \\end{array} \\right. \\Leftrightarrow \\left\\{ \\begin{array}{l} x=8 \\\\ y=0 \\\\ z=-3 \\end{array} \\right. \\Rightarrow B(8; 0;-3)$."
    },
    {
        q: "Cho hàm số $y=ax^3+bx^2+cx+d$ có đồ thị như hình. Mệnh đề nào dưới đây đúng?",
        image: "images/2612OnTNDe7/2612OnTNDe7TN10.png",
        options: [
            "Hàm số đã cho đồng biến trên khoảng $(0;+\\infty)$",
            "Hàm số đã cho đồng biến trên khoảng $(-\\infty;0)$",
            "Hàm số đã cho có một điểm cực đại và một điểm cực tiểu",
            "Hàm số đã cho không có điểm cực đại"
        ],
        answer: 2,
        explanation: "Dựa vào hình dáng đồ thị đặc trưng của hàm số bậc ba hệ số $a>0$, ta nhận thấy đồ thị lồi lên rồi lõm xuống, tương ứng hàm số có một điểm cực đại và một điểm cực tiểu."
    },
    {
        q: "Thời gian truy cập Internet mỗi buổi tối của một số học sinh được cho trong bảng số liệu ghép nhóm. <br><table border='1' style='border-collapse:collapse; text-align:center; width:100%; max-width:500px; margin:10px auto;'><tr><td>Thời gian (phút)</td><td>$[9{,}5; 12{,}5)$</td><td>$[12{,}5; 15{,}5)$</td><td>$[15{,}5; 18{,}5)$</td><td>$[18{,}5; 21{,}5)$</td><td>$[21{,}5; 24{,}5)$</td></tr><tr><td>Số học sinh</td><td>3</td><td>12</td><td>15</td><td>24</td><td>2</td></tr></table> Tứ phân vị thứ nhất $Q_3$ của mẫu số liệu ghép nhóm trên bằng:",
        options: [
            "$20$",
            "$21$",
            "$18{,}1$",
            "$15{,}25$"
        ],
        answer: 0,
        explanation: "Cỡ mẫu $n = 3 + 12 + 15 + 24 + 2 = 56$. Vị trí tứ phân vị thứ ba là $\\dfrac{3n}{4} = 42$.\\nTần số tích lũy của các nhóm trước nhóm chứa $Q_3$ là $3+12+15 = 30$, tần số tích lũy đến nhóm kế tiếp là $30+24 = 54$. Vì $30 < 42 \\le 54$ nên nhóm chứa $Q_3$ là $[18{,}5; 21{,}5)$.\\nÁp dụng công thức: $Q_3 = 18{,}5 + \\dfrac{42 - 30}{24} \\cdot (21{,}5 - 18{,}5) = 18{,}5 + \\dfrac{12}{24} \\cdot 3 = 18{,}5 + 1{,}5 = 20$."
    },
    {
        q: "Tập nghiệm của phương trình $\\tan x = 1$ là:",
        options: [
            "$S = \\left\\{ \\dfrac{k\\pi}{4} \\mid k \\in \\mathbb{Z} \\right\\}$",
            "$S = \\left\\{ \\dfrac{\\pi}{3} + k\\pi \\mid k \\in \\mathbb{Z} \\right\\}$",
            "$S = \\left\\{ \\dfrac{\\pi}{4} + k\\pi \\mid k \\in \\mathbb{Z} \\right\\}$",
            "$S = \\left\\{ -\\dfrac{\\pi}{4} + k\\pi \\mid k \\in \\mathbb{Z} \\right\\}$"
        ],
        answer: 2,
        explanation: "Phương trình lượng giác cơ bản: $\\tan x = 1 \\Leftrightarrow x = \\arctan(1) + k\\pi \\Leftrightarrow x = \\dfrac{\\pi}{4} + k\\pi$, $k \\in \\mathbb{Z}$."
    },
    {
        q: "Tập nghiệm của bất phương trình $\\log_3 (x-3) \\le 2$ chứa bao nhiêu số nguyên?",
        options: [
            "$7$",
            "$9$",
            "$6$",
            "Vô số"
        ],
        answer: 1,
        explanation: "Bất phương trình $\\log_3 (x-3) \\le 2 \\Leftrightarrow 0 < x-3 \\le 3^2 \\Leftrightarrow 0 < x-3 \\le 9 \\Leftrightarrow 3 < x \\le 12$.\\nDo $x \\in \\mathbb{Z}$ nên $x \\in \\{4; 5; 6; 7; 8; 9; 10; 11; 12\\}.\\nĐếm số phần tử: $12 - 4 + 1 = 9$ số nguyên."
    }
];

window.quizData['on-tn-de-7-2612_p2'] = [
    {
        q: "Cho hàm số $g(x)=\\dfrac{2x^2+x+7}{x+1}$. Xét tính đúng sai của các khẳng định sau:",
        sub_questions: [
            { text: "Tập xác định của hàm số $g(x)$ là $\\mathscr{D}=\\mathbb{R} \\setminus\\{1\\}$", correct: false },
            { text: "$g'(x) > 0, \\forall x > 1$", correct: true },
            { text: "Hàm số $g(x)$ không có điểm cực trị", correct: false },
            { text: "Hàm số $g(x)$ nghịch biến trên khoảng $(-3;1)$", correct: false }
        ],
        explanation: "- Mệnh đề 1 SAI vì điều kiện mẫu số $x+1 \\neq 0 \\Leftrightarrow x \\neq -1 \\Rightarrow \\mathscr{D} = \\mathbb{R} \\setminus \\{-1\\}$.\\n- Mệnh đề 2 ĐÚNG vì $g'(x)=\\dfrac{2x^2+4x-6}{(x+1)^2}$, có nghiệm $x=1, x=-3$ và hệ số bậc hai dương nên $g'(x)>0$ trên khoảng $(1;+\\infty)$.\\n- Mệnh đề 3 SAI vì đạo hàm đổi dấu qua 2 nghiệm phân biệt nên hàm số có hai điểm cực trị.\\n- Mệnh đề 4 SAI vì $g'(x)<0 \\Leftrightarrow -3 < x < 1$ và $x \\neq -1$. Do đó hàm số nghịch biến trên từng khoảng $(-3;-1)$ và $(-1;1)$, không thể kết luận nghịch biến trên khoảng chứa điểm gián đoạn $(-3;1)$."
    },
    {
        q: "Trong không gian với hệ tọa độ $Oxyz$, cho ba điểm $A(-3; 2;-1)$, $B(-1;-1;-3)$, $C(-2; 4;-3)$. Xét tính đúng sai của các khẳng định sau:",
        sub_questions: [
            { text: "Điểm $I(-1; 1;-2)$ là trung điểm của đoạn thẳng $BC$", correct: false },
            { text: "$AB=\\sqrt{17}$ và $AC=\\sqrt{3}$", correct: false },
            { text: "Tam giác $ABC$ là một tam giác vuông", correct: true },
            { text: "Diện tích tam giác $ABC$ là $S_{ABC}=\\dfrac{3\\sqrt{17}}{4}$", correct: false }
        ],
        explanation: "- Mệnh đề 1 SAI vì tọa độ trung điểm của $BC$ là $\\left(\\dfrac{-1-2}{2}; \\dfrac{-1+4}{2}; \\dfrac{-3-3}{2}\\right) = \\left(-\\dfrac{3}{2}; \\dfrac{3}{2};-3\right)$.\\n- Mệnh đề 2 SAI vì tính độ dài đoạn thẳng: $AB = \\sqrt{2^2+(-3)^2+(-2)^2} = \\sqrt{17}$ và $AC = \\sqrt{1^2+2^2+(-2)^2} = \\sqrt{9} = 3$.\\n- Mệnh đề 3 ĐÚNG vì xét các vectơ: $\\overrightarrow{AB}=(2;-3;-2)$, $\\overrightarrow{AC}=(1; 2;-2)$ có tích vô hướng $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 2(1) + (-3)2 + (-2)(-2) = 0 \\Rightarrow AB \\perp AC$, tam giác vuông tại $A$.\\n- Mệnh đề 4 SAI vì diện tích tam giác vuông tại $A$ là: $S_{ABC} = \\dfrac{1}{2} AB \\cdot AC = \\dfrac{1}{2} \\cdot \\sqrt{17} \\cdot 3 = \\dfrac{3\\sqrt{17}}{2}$."
    },
    {
        q: "Hình minh họa sơ đồ một ngôi nhà trong hệ trục tọa độ $Oxyz$, trong đó nền nhà, bốn bức tường và hai mái nhà đều là hình chữ nhật. Điểm $B(4;5;0)$, $E(0;0;3)$, $G(4;5;3)$, $P(2;0;4)$, $Q(2;5;4)$. Xét tính đúng sai của các khẳng định sau:",
        image: "images/2612OnTNDe7/2612OnTNDe7DS3.png",
        sub_questions: [
            { text: "Tọa độ của điểm $A\\left(5; 0; 0\\right)$", correct: false },
            { text: "Tọa độ của điểm $H\\left(0; 5; 3\\right)$", correct: true },
            { text: "Số đo của góc của mái nhà (góc nhị diện cạnh $PQ$) bằng $53{,}1^\\circ$", correct: false },
            { text: "Chiều cao của ngôi nhà là 4", correct: true }
        ],
        explanation: "- Mệnh đề 1 SAI vì điểm $A$ thuộc trục $Ox$ và có cùng hoành độ với $B(4;5;0)$ nên $A(4;0;0)$.\\n- Mệnh đề 2 ĐÚNG vì điểm $H$ thuộc mặt đứng song song mặt phẳng chiếu, có tọa độ được xác định là $H(0;5;3)$.\\n- Mệnh đề 3 SAI vì hình chiếu vuông góc lên cạnh chung $PQ$ tương ứng là hai vectơ chỉ phương mái nhà $\\overrightarrow{PE}=(-2;0;-1)$ và $\\overrightarrow{PF}=(2;0;-1)$. Có $\\cos(\\overrightarrow{PE}, \\overrightarrow{PF}) = \\dfrac{-3}{5} = -0,6 \\Rightarrow$ Góc nhị diện $\\approx 126,9^\\circ$.\\n- Mệnh đề 4 ĐÚNG vì nóc nhà là đường thẳng $PQ$ cao nhất, các điểm đều có cao độ $z=4$. Chiều cao tính từ mặt nền $z=0$ lên nóc là 4."
    },
    {
        q: "Cuối tuần bạn Bảo chọn mua 12 quyển sách khác nhau gồm 7 quyển Khoa Học Tự Nhiên và 5 quyển Khoa Học Xã Hội. Cha chọn ngẫu nhiên 3 quyển trong số đó để kiểm tra. Xét tính đúng sai của các mệnh đề sau:",
        sub_questions: [
            { text: "Nếu $P_a$ là xác suất để 3 quyển sách đều thuộc thể loại Khoa Học Xã Hội thì $11P_a=1$", correct: false },
            { text: "Nếu $P_b$ là xác suất để 3 quyển sách có đúng một quyển thuộc thể loại Khoa Học Tự Nhiên thì $22P_b=7$", correct: true },
            { text: "Nếu $P_c$ là xác suất để 3 quyển sách có đúng hai quyển thuộc thể loại Khoa Học Tự Nhiên thì $44P_c=21$", correct: true },
            { text: "Nếu $P_d$ là xác suất để 3 quyển sách có đủ hai thể loại thì $44P_d=35$", correct: true }
        ],
        explanation: "- Mệnh đề 1 SAI vì không gian mẫu $n(\\Omega) = C_{12}^3 = 220$. Chọn 3 quyển xã hội: $C_5^3 = 10 \\Rightarrow P_a = \\dfrac{10}{220} = \\dfrac{1}{22} \\Rightarrow 11P_a = \\dfrac{1}{2}$.\\n- Mệnh đề 2 ĐÚNG vì chọn 1 tự nhiên, 2 xã hội: $C_7^1 \\cdot C_5^2 = 70 \\Rightarrow P_b = \\dfrac{70}{220} = \\dfrac{7}{22} \\Rightarrow 22P_b = 7$.\\n- Mệnh đề 3 ĐÚNG vì chọn 2 tự nhiên, 1 xã hội: $C_7^2 \\cdot C_5^1 = 105 \\Rightarrow P_c = \\dfrac{105}{220} = \\dfrac{21}{44} \\Rightarrow 44P_c = 21$.\\n- Mệnh đề 4 ĐÚNG vì chọn có đủ cả hai thể loại là tổng hai trường hợp trên: $70 + 105 = 175 \\Rightarrow P_d = \\dfrac{175}{220} = \\dfrac{35}{44} \\Rightarrow 44P_d = 35$."
    }
];

window.quizData['on-tn-de-7-2612_p3'] = [
    {
        q: "Hai chất điểm $M, N$ chuyển động cùng hướng và xuất phát cùng một thời điểm trên hai đường thẳng $l_1$ và $l_2$ song song với nhau (chất điểm $M$ xuất phát từ điểm $B$, chất điểm $N$ xuất phát từ điểm $C$). Khoảng cách giữa hai đường thẳng $l_1$ và $l_2$ là 25 mét. Điểm $A$ cố định trên đường thẳng $l_1$. Tại thời điểm $t$ giây ($t \\geqslant 0$), khoảng cách từ các điểm $M$ và $N$ đến $A$ lần lượt là $d_M(t)=56+\\dfrac{t}{2}$ (mét) và $d_N(t)=\\dfrac{61t+42}{t+1}$ (mét). Tính khoảng cách (theo đơn vị mét) từ chất điểm $M$ đến $A$ tại thời điểm mà hai chất điểm $M$ và $N$ gần nhau nhất.",
        image: "images/2612OnTNDe7/2612OnTNDe7TLN1.png",
        answer: "65",
        explanation: "Gọi $H$ là hình chiếu của $M$ vuông góc lên đường thẳng $l_1$. Hai chất điểm $M, N$ đạt khoảng cách ngắn nhất khi hình chiếu trùng nhau ($N \\equiv H$).\\nKhi đó áp dụng định lý Pytago vào tam giác vuông $AHM$ ta có hệ thức: $AM^2 = AN^2 + MH^2 \\Leftrightarrow \\left(56+\\dfrac{t}{2}\\right)^2 = \\left(\\dfrac{61t+42}{t+1}\\right)^2 + 25^2$.\\nGiải phương trình tìm nghiệm thời gian thực tế $t \\ge 0$ thu được nghiệm $t=18$ giây. Thay vào khoảng cách ta được $d_M(18) = 56 + \\dfrac{18}{2} = 65$ m."
    },
    {
        q: "Cho hàm số $y=f(x)=a x^3+b x^2+c x+d$ có đồ thị cắt trục hoành tại ba điểm phân biệt có hoành độ lần lượt là $-1$; 1; 2. Biết rằng giá trị nhỏ nhất của hàm số $f(x)$ trên đoạn $\\left[0; \\dfrac{1}{2}\\right]$ bằng $-\\dfrac{45}{8}$. Tính tổng $a^2+b^2+c^2+d^2$.",
        answer: "79.1",
        explanation: "Do cắt trục hoành tại ba giao điểm nên phân tích đa thức thành nhân tử dạng: $f(x)=a(x+1)(x-1)(x-2) = a(x^3-2x^2-x+2)$.\\nĐạo hàm $f'(x)=a(3x^2-4x-1)=0$ cho ra các nghiệm xấp xỉ $-0,22$ và $1,55$, cả hai đều không thuộc đoạn đang xét $[0; 0,5]$. Giá trị cực trị đạt tại biên: $f(0)=2a$ và $f(0,5)=\\dfrac{9a}{8}$.\\n- Nếu $a>0 \\Rightarrow \\min = f(0,5) = \\dfrac{9a}{8} = -\\dfrac{45}{8} \\Rightarrow a = -5$ (loại vì trái dấu).\\n- Nếu $a<0 \\Rightarrow \\min = f(0) = 2a = -\\dfrac{45}{8} \\Rightarrow a = -\\dfrac{45}{16}$ (thỏa mãn).\\nHàm số hoàn chỉnh thu được là $f(x)=-\\dfrac{45}{16}x^3+\\dfrac{45}{8}x^2+\\dfrac{45}{16}x-\\dfrac{45}{8}$. Tổng bình phương các hệ số $S = a^2+b^2+c^2+d^2 = \\dfrac{10125}{128} \\approx 79,1$."
    },
    {
        q: "Trong không gian, cho hình lập phương $ABCD. A'B'C'D'$ có cạnh bằng 5. Tính tích vô hướng của hai vectơ $\\overrightarrow{AB'}$ và $\\overrightarrow{C'B}$.",
        answer: "-25",
        explanation: "Gắn hệ trục tọa độ góc vuông tại $A(0;0;0)$. Khi đó thiết lập tọa độ các đỉnh tương ứng của khối hình lập phương cạnh bằng 5 là: $B'(5;0;5)$, $C'(5;5;5)$, $B(5;0;0)$.\\nTa có biểu diễn tọa độ hai vectơ: $\\overrightarrow{AB'} = (5;0;5)$ và $\\overrightarrow{C'B} = (5-5; 0-5; 0-5) = (0;-5;-5)$.\\nTích vô hướng thu được là: $\\overrightarrow{AB'} \\cdot \\overrightarrow{C'B} = 5(0) + 0(-5) + 5(-5) = -25$."
    },
    {
        q: "Người ta muốn tạo ra một khối pha lê trang trí có dạng hình chóp đều với đáy là tứ giác và có diện tích toàn phần (tổng diện tích của bốn mặt bên và mặt đáy) là 100 cm$^2$. Thể tích tối đa của khối pha lê được tạo ra là bao nhiêu xen-ti-mét khối? (làm tròn kết quả đến hàng phần chục).",
        image: "images/2612OnTNDe7/2612OnTNDe7TLN4.png",
        answer: "58.9",
        explanation: "Gọi cạnh đáy chóp đều là $a$, chiều cao mặt bên dựng từ đỉnh là $b$ ($a, b > 0$). Chiều cao khối chóp tứ giác $h = \\sqrt{b^2 - \\dfrac{a^2}{4}}$.\\nDiện tích toàn phần: $S = a^2 + 4 \\cdot \\left(\\dfrac{1}{2}ab\\right) = a^2 + 2ab = 100 \\Rightarrow b = \\dfrac{100-a^2}{2a}$ (với $0 < a < 10$).\\nThay vào chiều cao chóp: $h = \\sqrt{\\dfrac{(100-a^2)^2}{4a^2} - \\dfrac{a^2}{4}} = \\sqrt{\\dfrac{100(100-2a^2)}{4a^2}} = \\dfrac{5}{a}\\sqrt{100-2a^2}$.\\nHàm thể tích khối chóp thu được: $V = \\dfrac{1}{3}a^2h = \\dfrac{5}{3}a\\sqrt{100-2a^2}$. Sử dụng bất đẳng thức Cauchy hoặc đạo hàm $V'(a)=0 \\Leftrightarrow a=5$ cm. Thể tích tối đa đạt được là $V_{\\max} = \\dfrac{125\\sqrt{2}}{3} \\approx 58,9 \\text{ cm}^3$."
    },
    {
        q: "Đồ thị hàm số $y=\\dfrac{3x-1}{x+4}$ có đường tiệm cận đứng cắt đường tiệm cận ngang tại điểm $I$. Tính khoảng cách từ điểm $I$ đến gốc tọa độ $O$.",
        answer: "5",
        explanation: "Từ phương trình hàm phân thức hữu tỉ, ta xác định được:\\n- Tiệm cận đứng bằng nghiệm mẫu số: $x = -4$.\\n- Tiệm cận ngang bằng giới hạn vô cực: $y = 3$.\\nGiao điểm của hai đường tiệm cận là $I(-4;3)$. Khoảng cách từ điểm $I$ đến gốc tọa độ $O(0;0)$ là: $IO = \\sqrt{(-4-0)^2 + (3-0)^2} = \\sqrt{16+9} = 5$."
    },
    {
        q: "Anh Nam mới vừa mua xe ô tô nhưng chưa ra biển số, anh rất mong muốn 5 chữ số trên biển số xe của mình là 'không lùi' hoặc 'không quá bé'. Theo cách nghĩ của anh Nam, đó là một số tự nhiên có 5 chữ số dạng $\\overline{m a b c n}$ sao cho $4\\leqslant m \\leqslant a \\leqslant b \\leqslant c \\leqslant n$. Có tất cả bao nhiêu số tự nhiên phù hợp với mong muốn của anh Nam?",
        answer: "252",
        explanation: "Các chữ số $m, a, b, c, n$ được chọn từ tập hợp gồm 6 số liên tiếp $\\{4; 5; 6; 7; 8; 9\\}$.\\nDo các phần tử có thứ tự không giảm và được phép lặp lại, bài toán trở thành tính số tổ hợp lặp chập $k=5$ của $n=6$ phần tử.\\nÁp dụng công thức số lượng tổ hợp lặp ta có: $C_{n+k-1}^k = C_{6+5-1}^5 = C_{10}^5 = 252$ số thỏa mãn.\\n(Cách khác: sử dụng kỹ thuật tịnh tiến bất đẳng thức nghiêm ngặt biến đổi thành chọn 5 số phân biệt từ tập 10 số, số kết quả bằng $C_{10}^5 = 252$)."
    }
];