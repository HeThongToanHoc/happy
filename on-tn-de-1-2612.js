// DỮ LIỆU ĐỀ 1 - THUỘC HỆ THỐNG IRIS MATH
window.quizData = window.quizData || {};

window.quizData['on-tn-de-1-2612_p1'] = [
    {
        q: "Cho hình hộp $ABCD.A'B'C'D'$. Đặt $\\overrightarrow{AB}=\\overrightarrow{a},\\overrightarrow{AD}=\\overrightarrow{b},\\overrightarrow{AA'}=\\overrightarrow{c}$. Phân tích vectơ $\\overrightarrow{AC'}$ theo $\\overrightarrow{a},\\overrightarrow{b},\\overrightarrow{c}$?",
        options: [
            "$\\overrightarrow{AC'}=-\\overrightarrow{a}+\\overrightarrow{b}+\\overrightarrow{c}$",
            "$\\overrightarrow{AC'}=\\overrightarrow{a}-\\overrightarrow{b}+\\overrightarrow{c}$",
            "$\\overrightarrow{AC'}=\\overrightarrow{a}+\\overrightarrow{b}-\\overrightarrow{c}$",
            "$\\overrightarrow{AC'}=\\overrightarrow{a}+\\overrightarrow{b}+\\overrightarrow{c}$"
        ],
        answer: 3,
        explanation: "Theo quy tắc hình hộp ta có $\\overrightarrow{AC'}=\\overrightarrow{AB}+\\overrightarrow{AD}+\\overrightarrow{AA'}=\\overrightarrow{a}+\\overrightarrow{b}+\\overrightarrow{c}$."
    },
    {
        q: "Cho phương trình $2\\sin x-\\sqrt{3}=0$. Tổng các nghiệm thuộc $[0;\\pi]$ của phương trình là",
        options: [
            "$\\dfrac{2\\pi}{3}$",
            "$\\dfrac{4\\pi}{3}$",
            "$\\dfrac{\\pi}{3}$",
            "$\\pi$"
        ],
        answer: 3,
        explanation: "Ta có $2\\sin x-\\sqrt{3}=0\\Leftrightarrow\\sin x=\\dfrac{\\sqrt{3}}{2}\\Leftrightarrow\\hoac{&x=\\dfrac{\\pi}{3}+k2\\pi\\\\&x=\\dfrac{2\\pi}{3}+k2\\pi}, k\\in\\mathbb{Z}.$\nVới $x=\\dfrac{\\pi}{3}+k2\\pi$, theo đề ta có $0\\leq x\\leq\\pi\\Leftrightarrow 0\\leq\\dfrac{\\pi}{3}+k2\\pi\\leq\\pi\\Leftrightarrow\\dfrac{-1}{6}\\leq k\\leq\\dfrac{1}{3}$.\nMà $k\\in\\mathbb{Z}$ nên $k=0$ suy ra $x=\\dfrac{\\pi}{3}$.\nVới $x=\\dfrac{2\\pi}{3}+k2\\pi$, theo đề ta có $0\\leq x\\leq\\pi\\Leftrightarrow 0\\leq\\dfrac{2\\pi}{3}+k2\\pi\\leq\\pi\\Leftrightarrow\\dfrac{-1}{3}\\leq k\\leq\\dfrac{1}{6}$.\nMà $k\\in\\mathbb{Z}$ nên $k=0$ suy ra $x=\\dfrac{2\\pi}{3}$.\nVậy tổng các nghiệm là $\\dfrac{\\pi}{3}+\\dfrac{2\\pi}{3}=\\pi$."
    },
    {
        q: "Giá trị nhỏ nhất của hàm số $f(x)=x^3-6x^2+9x-1$ trên nửa khoảng $[-1;+\\infty)$ là",
        options: [
            "$1$",
            "$-17$",
            "$17$",
            "$3$"
        ],
        answer: 1,
        explanation: "Ta có $f'(x)=3x^2-12x+9$, $f'(x)=0\\Leftrightarrow\\hoac{&x=1\\in[-1;+\\infty)\\\\&x=3\\in[-1;+\\infty).}$\nSử dụng bảng biến thiên, ta thu được giá trị cực tiểu cũng là giá trị nhỏ nhất của hàm số trên nửa khoảng này.\nVậy $\\min\\limits_{[-1;+\\infty)} f(x)=f(-1)=-17$."
    },
    {
        q: "Tìm tập xác định $\\mathscr{D}$ của hàm số $y=\\log_2\\left(x^2-2x-3\\right)$.",
        options: [
            "$\\mathscr{D}=(-\\infty;-1)\\cup (3;+\\infty)$",
            "$\\mathscr{D}=(-\\infty;-1]\\cup [3;+\\infty)$",
            "$\\mathscr{D}=[-1;3]$",
            "$\\mathscr{D}=(-1;3)$"
        ],
        answer: 0,
        explanation: "Hàm số xác định khi $x^2-2x-3>0\\Leftrightarrow\\hoac{&x <-1\\\\&x>3.}$\nVậy $\\mathscr{D}=(-\\infty;-1)\\cup (3;+\\infty)$."
    },
    {
        q: "Nhiệm của phương trình $\\cos x=\\cos\\dfrac{\\pi}{4}$ là",
        options: [
            "$x=\\pm\\dfrac{\\pi}{3}+k2\\pi, k\\in\\mathbb{Z}$",
            "$x=-\\dfrac{\\pi}{6}+k2\\pi, k\\in\\mathbb{Z}$",
            "$x=\\pm\\dfrac{\\pi}{4}+k2\\pi, k\\in\\mathbb{Z}$",
            "$x=\\dfrac{\\pi}{6}+k2\\pi, k\\in\\mathbb{Z}$"
        ],
        answer: 2,
        explanation: "Theo công thức nghiệm của phương trình ta có $\\cos x=\\cos\\dfrac{\\pi}{4}\\Leftrightarrow\\hoac{&x=\\dfrac{\\pi}{4}+k2\\pi\\\\&x=-\\dfrac{\\pi}{4}+k2\\pi}, k\\in\\mathbb{Z}.$"
    },
    {
        q: "Giả sử $F(x)$ và $G(x)$ là hai nguyên hàm của $f(x)$ trên $\\mathbb{R}$ sao cho $F(1)-G(1)=3$. Tính $G(2)-F(2)$.",
        options: [
            "$-3$",
            "$3$",
            "$6$",
            "$-6$"
        ],
        answer: 0,
        explanation: "Vì $F(x)$ và $G(x)$ là hai nguyên hàm của $f(x)$ trên $\\mathbb{R}$ nên $G(x)=F(x)+m$, $\\forall x\\in\\mathbb{R}$, ($m$ là một hằng số).\nDo đó $G(2)-F(2)=G(1)-F(1)=-3$."
    },
    {
        q: "Cho bảng tần số ghép nhóm số liệu thống kê chiều cao của 40 mẫu cây ở một vườn thực vật (đơn vị centimét). <br><table border='1' style='border-collapse:collapse; text-align:center;'><tr><td>Doanh thu</td><td>$[30 ; 40)$</td><td>$[40 ; 50)$</td><td>$[50 ; 60)$</td><td>$[60 ; 70)$</td><td>$[70 ; 80)$</td><td>$[80 ; 90)$</td></tr><tr><td>Số ngày</td><td>4</td><td>10</td><td>14</td><td>6</td><td>4</td><td>2</td></tr></table> Tứ phân vị thứ nhất của mẫu số liệu thuộc nhóm nào dưới đây?",
        options: [
            "$[50; 60)$",
            "$[40; 50)$",
            "$[70; 80)$",
            "$[60; 70)$"
        ],
        answer: 1,
        explanation: "Cỡ mẫu $n=4+10+14+6+4+2=40$.\nGọi $a_1$, $a_2$, $\\dots$, $a_{40}$ là chiều cao của 40 cây sắp xếp theo thứ tự không giảm.\nTứ phân vị thứ nhất của mẫu số liệu gốc là $\\dfrac{a_{10}+a_{11}}{2}$ nên nhóm chứa tứ phân vị thứ nhất là nhóm $[40; 50)$."
    },
    {
        q: "Đồ thị hàm số $y=\\dfrac{x^2+2x+2}{x+1}$ có tiệm cận xiên là đường thẳng",
        options: [
            "$y=x$",
            "$y=2x-1$",
            "$y=x-1$",
            "$y=x+1$"
        ],
        answer: 3,
        explanation: "Gọi tiệm cận xiên của đồ thị hàm số là $y=ax+b (a\\neq 0)$.\n$a=\\lim\\limits_{x\\to+\infty}\\dfrac{y}{x} =\\lim\\limits_{x\\to+\infty}\\dfrac{x^2+2x+2}{x^2+x} = 1$.\n$b=\\lim\\limits_{x\\to+\infty}(y-x) =\\lim\\limits_{x\\to+\infty}\\left(\\dfrac{x^2+2x+2}{x+1}-x\\right) =\\lim\\limits_{x\\to+\infty}\\dfrac{x+2}{x+1}=1$.\nVậy tiệm cận xiên của đồ thị hàm số là $y=x+1$."
    },
    {
        q: "Cho cấp số nhân $(u_n)$ với $u_1=-2$ và $q=-5$. Viết bốn số hạng đầu tiên của cấp số nhân $(u_n)$.",
        options: [
            "$-2;-10;-50;-250$",
            "$-2; 10;-50; 250$",
            "$-2; 10; 50; 250$",
            "$-2; 10; 50;-250$"
        ],
        answer: 1,
        explanation: "Ta có: \n$u_2=u_1\\cdot q=(-2)\\cdot (-5)=10$;\n$u_3=u_2\\cdot q=10\\cdot (-5)=-50$;\n$u_4=u_3\\cdot q=(-50)\\cdot (-5)=250$.\nVậy bốn số hạng đầu tiên của cấp số nhân $(u_n)$ là $-2$; $10$; $-50$; $250$."
    },
    {
        q: "Trong không gian $Oxyz$, cho $\\overrightarrow{OA}=6\\overrightarrow{j}+4\\overrightarrow{i}-3\\overrightarrow{k}$. Tọa độ của điểm $A$ là",
        options: [
            "$(4;6;-3)$",
            "$(-4;-6;3)$",
            "$(-6;-4;3)$",
            "$(6;4;-3)$"
        ],
        answer: 0,
        explanation: "$\\overrightarrow{OA}=6\\overrightarrow{j}+4\\overrightarrow{i}-3\\overrightarrow{k}=4\\overrightarrow{i}+6\\overrightarrow{j}-3\\overrightarrow{k}\\Rightarrow A(4;6;-3)$."
    },
    {
        q: "Cho hàm số $y=f(x)$ xác định trên $\\mathbb{R}$ và có bảng xét dấu của $f'(x)$ như bên dưới. Số điểm cực đại của hàm số đã cho là",
        image: "images/2612OnTNDe1/2612OnTNDe1TN11.png",
        options: [
            "$2$",
            "$1$",
            "$4$",
            "$3$"
        ],
        answer: 0,
        explanation: "Điểm cực đại là điểm mà tại đó đạo hàm $f'(x)$ đổi dấu từ dương (+) sang âm (-). Dựa vào bảng xét dấu, $f'(x)$ đổi dấu từ + sang - khi qua $x = -1$ và $x = 1$. Vậy hàm số có 2 điểm cực đại."
    },
    {
        q: "Tổng tất cả các nghiệm của phương trình $2^{x^2+2x}=8^{2-x}$ là",
        options: [
            "$-6$",
            "$5$",
            "$6$",
            "$-5$"
        ],
        answer: 3,
        explanation: "Ta có $2^{x^2+2x}=8^{2-x}\\Leftrightarrow 2^{x^2+2x}=2^{3(2-x)}\\Leftrightarrow x^2+2x=6-3x\\Leftrightarrow x^2+5x-6=0$.\nPhương trình có hai nghiệm trái dấu và theo định lý Vi-ét tổng hai nghiệm bằng $-5$."
    }
];

window.quizData['on-tn-de-1-2612_p2'] = [
    {
        q: "Cho phương trình $\\dfrac{\\sin 2x-\\sin x}{\\cos x+1}=0 \\; (*)$. Khẳng định sau đúng hay sai.",
        sub_questions: [
            { text: "Điều kiện xác định của phương trình là $x\\ne \\pi+k2\\pi, \\; k\\in \\mathbb{Z}$", correct: true },
            { text: "Phương trình có nghiệm $x=\\pi$", correct: false },
            { text: "Nghiệm dương nhỏ nhất của phương trình là $\\dfrac{\\pi}{3}$", correct: true },
            { text: "Số nghiệm của phương trình trên đoạn $[0;\\; 2\\pi]$ là 5", correct: false }
        ],
        explanation: "- Mệnh đề 1 ĐÚNG vì $\\cos x+1 \\ne 0 \\Leftrightarrow \\cos x \\ne -1 \\Leftrightarrow x \\ne \\pi+k2\\pi \\ (k \\in \\mathbb{Z})$.\n- Mệnh đề 2 SAI vì $x = \\pi$ không thỏa mãn ĐKXĐ.\n- Mệnh đề 3 ĐÚNG vì từ $(*)\\Rightarrow \\sin 2x = \\sin x \\Leftrightarrow x=k2\\pi$ hoặc $x=\\dfrac{\\pi}{3}+\\dfrac{k2\\pi}{3}$. Kết hợp ĐKXĐ ta được họ nghiệm $x=k2\\pi$, $x=\\pm\\dfrac{\\pi}{3}+k2\\pi$. Nghiệm dương nhỏ nhất là $\\dfrac{\\pi}{3}$.\n- Mệnh đề 4 SAI vì trên đoạn $[0; 2\\pi]$ phương trình chỉ có 4 nghiệm là $0, \\dfrac{\\pi}{3}, \\dfrac{5\\pi}{3}, 2\\pi$."
    },
    {
        q: "Một xạ thủ bắn bia, trên bia có các vòng tròn tính điểm (từ 5 đến 10) như hình vẽ. Mỗi lần bắn, xác suất xạ thủ đó bắn trúng vòng 8 là 0,25; trúng vòng dưới 8 (kể cả bắn trượt) là 0,4. Gọi $P_1$, $P_2$ lần lượt là xác suất xạ thủ đó bắn trúng vòng 10 và vòng 9 trong mỗi lần bắn. Biết rằng nếu xạ thủ đó bắn ba phát vào bia thì xác suất cả ba lần bắn trúng vòng 10 là 0,003375. Xét tính đúng sai:",
        image: "images/2612OnTNDe1/2612OnTNDe1DS2.png",
        sub_questions: [
            { text: "$P_1=0{,}15$", correct: true },
            { text: "$P_2=0{,}18$", correct: false },
            { text: "Nếu xạ thủ đó bắn ba phát thì xác suất đạt 29 điểm là 0,0045", correct: false },
            { text: "Nếu xạ thủ đó bắn ba phát thì xác suất đạt ít nhất 28 điểm là 0,05175", correct: true }
        ],
        explanation: "- Mệnh đề 1 ĐÚNG vì $P_1^3 = 0,003375 \\Rightarrow P_1 = 0,15$.\n- Mệnh đề 2 SAI vì tổng xác suất từ vòng 8 trở xuống là 0,65, suy ra $P_1+P_2 = 1 - 0,65 = 0,35 \\Rightarrow P_2 = 0,2$.\n- Mệnh đề 3 SAI vì đạt 29 điểm gồm 3 hoán vị của (10, 10, 9), xác suất là $3 \\cdot (0,15^2 \\cdot 0,2) = 0,0135$.\n- Mệnh đề 4 ĐÚNG do tổng xác suất các trường hợp đạt ít nhất 28 điểm (gồm các bộ điểm: 10-10-8, 10-9-9, 10-10-9, 10-10-10) bằng 0,05175."
    },
    {
        q: "Trong không gian $Oxyz$, cho đường thẳng $\\triangle \\colon \\left\\{ \\begin{array}{l} x=-1+t \\\\ y=-2+2t \\\\ z=-3+2t \\end{array} \\right.$ và mặt cầu $(S)\\colon (x-3)^2+y^2+(z-2)^2=25$. Gọi $I$ là tâm của mặt cầu $(S)$. Xét tính đúng sai:",
        sub_questions: [
            { text: "Mặt cầu $(S)$ có tâm $I(-3;0;-2)$ và bán kính $R=5$", correct: false },
            { text: "Đường thẳng $\\triangle$ đi qua điểm $M(-2;-4;-6)$", correct: false },
            { text: "Hình chiếu vuông góc của tâm $I$ lên đường thẳng $\\triangle$ là điểm $H(1;2;-1)$", correct: false },
            { text: "Đường thẳng $\\triangle$ cắt mặt cầu $(S)$ tại hai điểm $A, B$ và diện tích $\\triangle IAB$ bằng 12", correct: true }
        ],
        explanation: "- Mệnh đề 1 SAI vì mặt cầu có tâm $I(3;0;2)$.\\n- Mệnh đề 2 SAI vì thay tọa độ điểm $M$ vào phương trình đường thẳng ta được hệ vô nghiệm ($t=-1$ và $t=-1.5$).\\n- Mệnh đề 3 SAI vì hình chiếu vuông góc chính xác của $I$ lên $\\triangle$ là $H(1;2;1)$.\\n- Mệnh đề 4 ĐÚNG vì tính được độ dài đoạn vuông góc $IH = 3 < R=5$, suy ra đường thẳng cắt mặt cầu tại 2 điểm $A, B$. Khi đó dây cung $AB = 2\\sqrt{R^2-IH^2} = 8$. Diện tích tam giác $S_{IAB} = \\dfrac{1}{2} \\cdot IH \\cdot AB = \\dfrac{1}{2} \\cdot 3 \\cdot 8 = 12$."
    },
    {
        q: "Một tổ chức bảo tồn thiên nhiên thực hiện dự án tái thả loài Sao la vào rừng quốc gia. Chi phí để chăm sóc và theo dõi mỗi cá thể là 0,5 triệu đồng, trong khi kinh phí tài trợ nhận được cho mỗi cá thể được thả thành công là 1,2 triệu đồng. Số lượng cá thể $n(x)$ dự kiến sống sót và phát triển phụ thuộc vào ngân sách chi cho việc cải tạo môi trường sống $x$ (đơn vị: triệu đồng) theo công thức $n(x) = A + 40 \\cdot \\ln(1+x)$. Biết rằng nếu chi $(e^2-1)$ triệu đồng cho việc cải tạo môi trường thì có 190 cá thể sống sót. Xét tính đúng sai:",
        sub_questions: [
            { text: "$A = 100$", correct: false },
            { text: "Hàm số dư kinh phí của dự án (tính theo triệu đồng) là $L(x) = 77 + 28 \\cdot \\ln(1+x) - x$", correct: true },
            { text: "Nếu ngân sách cải tạo môi trường là 10 triệu đồng thì số tiền dư lại cho quỹ bảo tồn là 150 triệu đồng", correct: false },
            { text: "Để số tiền dư lại cho quỹ bảo tồn đạt giá trị lớn nhất, tổ chức cần chi 26,799 triệu đồng (kết quả làm tròn đến hàng phần nghìn) cho việc cải tạo môi trường", correct: true }
        ],
        explanation: "- Mệnh đề 1 SAI vì thay $x = e^2 - 1$ và $n(x) = 190$ vào công thức số lượng cá thể tìm được $A = 110$.\n- Mệnh đề 2 ĐÚNG vì hàm số dư $L(x) = 0,7 \\cdot n(x) - x = 77 + 28 \\cdot \\ln(1+x) - x$.\n- Mệnh đề 3 SAI vì thay $x = 10$ vào hàm số dư $L(10) \\approx 134,14$ (triệu đồng).\n- Mệnh đề 4 ĐÚNG vì xét điều kiện thực tế số cá thể phải là số nguyên, ta cần chọn số cá thể là 243 cá thể (chi phí $x \\approx 26,799$ triệu đồng) để đạt lợi nhuận lớn nhất."
    }
];

window.quizData['on-tn-de-1-2612_p3'] = [
    {
        q: "Người ta xây dựng một chân tháp bằng bê tông có dạng khối chóp cụt tháp cụt tứ giác đều. Cạnh đáy dưới dài 5 m, cạnh đáy trên dài 2 m, cạnh bên dài 3 m. Tính thể tích chân tháp (làm tròn kết quả đến hàng phần mười).",
        image: "images/2612OnTNDe1/2612OnTNDe1TLN1.png",
        answer: "27.6",
        explanation: "Giả sử chân tháp là khối chóp cụt tứ giác đều $ABCD.MNPQ$ với đáy lớn cạnh 5m, đáy nhỏ cạnh 2m, cạnh bên bằng 3m. Gọi $O, I$ lần lượt là tâm hai đáy.\\nXét hình thang cân $QNBD$ có $NQ = 2\\sqrt{2}$, $BD = 5\\sqrt{2}$. Kẻ đường cao $QH \\perp BD$, ta tìm được $HD = \\dfrac{BD - NQ}{2} = \\dfrac{3\\sqrt{2}}{2}$ m.\\nTrong tam giác vuông $QHD$, chiều cao chân tháp $QH = \\sqrt{QD^2 - HD^2} = \\sqrt{3^2 - \\left(\\dfrac{3\\sqrt{2}}{2}\\right)^2} = \\dfrac{3\\sqrt{2}}{2}$ m.\\nThể tích hình chóp cụt: $V = \\dfrac{1}{3} \\cdot QH \\cdot (S_1 + S_2 + \\sqrt{S_1S_2}) = \\dfrac{1}{3} \\cdot \\dfrac{3\\sqrt{2}}{2} \\cdot (25 + 4 + \\sqrt{25\\cdot 4}) = \\dfrac{39\\sqrt{2}}{2} \\approx 27,6 \\text{ m}^3$."
    },
    {
        q: "Một làng được ủng hộ túi thóc giống được trộn đều bởi 3 loại. Loại 1 chiếm $10\\%$ và có $90\\%$ nảy mầm. Loại 2 chiếm $30\\%$ và có $80\\%$ nảy mầm. Loại 3 chiếm $60\\%$ và có $60\\%$ nảy mầm. Chọn ngẫu nhiên 1 hạt nảy mầm. Tính xác suất để hạt thóc đó là loại 3 (Kết quả làm tròn đến hàng phần trăm).",
        answer: "0.52",
        explanation: "Gọi $A$ là biến cố hạt thóc nảy mầm, $B_1, B_2, B_3$ lần lượt là các biến cố hạt thóc thuộc loại 1, 2, 3.\\nTa có xác suất toàn phần hạt thóc nảy mầm: $\\mathrm{P}(A) = 0,1 \\cdot 0,9 + 0,3 \\cdot 0,8 + 0,6 \\cdot 0,6 = 0,69$.\\nXác suất để hạt thóc nảy mầm đó thuộc loại 3 áp dụng theo công thức Bayes: $\\mathrm{P}(B_3|A) = \\dfrac{\\mathrm{P}(B_3) \\cdot \\mathrm{P}(A|B_3)}{\\mathrm{P}(A)} = \\dfrac{0,6 \\cdot 0,6}{0,69} = \\dfrac{12}{23} \\approx 0,52$."
    },
    {
        q: "Một cái ao có hình $ABCDE$, ở giữa ao có một mảnh vườn trồng hoa hình tròn bán kính 9 mét, người ta muốn bắc một cây cầu từ bờ $AB$ của ao đến vườn. Hai bờ $AE$ và $BC$ nằm trên hai đường thẳng vuông góc nhau, hai đường thẳng này cắt nhau tại điểm $O$. Bờ $AB$ là một parabol có đỉnh là điểm $A$ và có trục đối xứng là đường thằng $OA$. Độ dài đoạn thẳng $OA$ và $OB$ lần lượt là 48 mét và 20 mét, tâm $I$ của mảnh vườn cách đường thẳng $AE$ và $BC$ lần lượt 48 mét, 30 mét. Độ dài ngắn nhất có thể của cây cầu là bao nhiêu mét (kết quả làm tròn đến hàng phần chục)?",
        image: "images/2612OnTNDe1/2612OnTNDe1TLN3.png",
        answer: "25.2",
        explanation: "Chọn hệ trục tọa độ $Oxy$ với $O(0;0)$, tia $OC$ trùng tia $Ox$, tia $OE$ trùng tia $Oy$.\\nKhi đó parabol bờ $AB$ có phương trình $y = -\\dfrac{3}{25}x^2 + 48$ với $0 \\le x \\le 20$. Đường tròn vườn hoa có tâm $I(48;30)$, bán kính $R=9$.\\nXét điểm $M(a; -\\dfrac{3}{25}a^2+48)$ thuộc parabol, khoảng cách ngắn nhất từ đường tròn đến parabol là $\\min(MI) - R$.\\nKhảo sát khoảng cách đại số $MI = \\sqrt{(48-a)^2 + (-0,12a^2+18)^2}$, ta tìm được khoảng cách ngắn nhất của cây cầu xấp xỉ bằng 25,2 mét."
    },
    {
        q: "Một trang trại quy hoạch trồng bưởi da xanh và cam sành trên tổng diện tích tối đa là 9 ha. Để trồng 1 ha bưởi da xanh cần 30 công lao động và 20 triệu đồng tiền vốn. Để trồng 1 ha cam sành cần 10 công lao động và 60 triệu đồng tiền vốn. Trang trại hiện có tối đa 210 công lao động và nguồn vốn đầu tư không vượt quá 420 triệu đồng. Lợi nhuận thu được ước tính là 50 triệu/ha bưởi da xanh và 40 triệu/ha cam sành. Hãy xác định mức lợi nhuận tối đa có thể đạt được (đơn vị triệu đồng).",
        answer: "420",
        explanation: "Gọi $x, y$ lần lượt là diện tích trồng bưởi và cam ($x, y \\ge 0$). Ta có hệ bất phương trình ràng buộc:\\n$\\{ x+y \\le 9; 3x+y \\le 21; x+3y \\le 21 \\}$.\\nMiền nghiệm thu được là ngũ giác $OABCD$ với các đỉnh $O(0;0), A(7;0), B(6;3), C(3;6), D(0;7)$.\\nHàm mục tiêu lợi nhuận: $F(x,y) = 50x + 40y$.\\nTính giá trị tại các đỉnh miền nghiệm, lợi nhuận lớn nhất đạt được tại đỉnh $B(6;3)$ với $F(6,3) = 50(6) + 40(3) = 420$ triệu đồng."
    },
    {
        q: "Một vật thể có dạng khối tròn xoay được tạo thành khi hình phẳng $(H)$ (phần gạch chéo trong hình vẽ bên) quanh trục $AB$. Hình phẳng $(H)$ nằm trong hình chữ nhật $ABCD$, giới hạn bởi các đoạn thẳng $AM, BP$ ($M, P$ là hai điểm lần lượt thuộc các cạnh $AD, BC$), cung tròn $MN$ và cung parabol $NP$. Biết $AB=5$ dm, $AM=1$ dm, $BPNE$ là hình vuông có cạnh 1 dm, cung tròn $MN$ có bán kính $R=\sqrt{5}$ dm và tiếp tuyến của cung tròn và cung parabol tại $N$ trùng nhau. Tính thể tích của vật thể tròn xoay đó (kết quả làm tròn đến chữ số hàng phần chục).",
        image: "images/2612OnTNDe1/2612OnTNDe1TLN5.png",
        answer: "47.5",
        explanation: "Đặt hệ trục tọa độ sao cho $A(0;0)$, trục $AB$ nằm trên trục hoành $Ox$. Khi đó $M(0;1), N(4;1), P(5;1), E(4;0), B(5;0)$.\\nCung tròn $MN$ thuộc đường tròn $(x-2)^2+y^2=5 \\Rightarrow y^2 = 5-(x-2)^2$. Thể tích $V_1 = \\pi \\int_0^4 [5-(x-2)^2] \\text{d}x = \\dfrac{44\\pi}{3}$.\\nCung parabol $NP$ đi qua $N(4;1), P(5;1)$ và có tiếp tuyến tại $N$ trùng tiếp tuyến đường tròn ($y=-2x+9$). Tìm được phương trình parabol: $y=2x^2-18x+41$.\\nThể tích khối xoay parabol: $V_2 = \\pi \\int_4^5 (2x^2-18x+41)^2 \\text{d}x = \\dfrac{7\\pi}{15}$.\\nTổng thể tích vật thể: $V = V_1 + V_2 = \\dfrac{44\\pi}{3} + \\dfrac{7\\pi}{15} \\approx 47,5 \\text{ dm}^3$."
    },
    {
        q: "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$ và $SA = \\sqrt{5}, AB = \\sqrt{2}, BC = 2, \\widehat{ABC} = 135^{\\circ}$. Số đo của góc nhị diện $[A, SC, B]$ bằng $m^{\\circ}$. Giá trị của $m$ bằng bao nhiêu? (Kết quả làm tròn đến hàng đơn vị).",
        answer: "30",
        explanation: "Áp dụng định lý côsin trong tam giác đáy $ABC$, tính được $AC = \\sqrt{AB^2+BC^2-2AB\\cdot BC\\cdot\\cos 135^\\circ} = \\sqrt{10}$.\\nKẻ $BH \\perp AC$, tính được diện tích $S_{ABC}=1 \\Rightarrow BH = \\dfrac{2}{AC} = \\dfrac{\\sqrt{10}}{5}$ và đoạn $HC = \\dfrac{3\\sqrt{10}}{5}$.\\nKẻ $HK \\perp SC \\Rightarrow$ góc nhị diện cần tìm là $\\widehat{BKH}$.\\nTrong tam giác vuông $SAC$, có $SC = \\sqrt{SA^2+AC^2}=\\sqrt{15}$. Hai tam giác đồng dạng $\\triangle HKC \\sim \\triangle SAC \\Rightarrow HK = \\dfrac{SA \\cdot HC}{SC} = \\dfrac{\\sqrt{30}}{5}$.\\nTrong tam giác vuông $\\triangle BKH$, $\\tan \\widehat{BKH} = \\dfrac{BH}{HK} = \\dfrac{1}{\\sqrt{3}} \\Rightarrow \\widehat{BKH} = 30^\\circ$."
    }
];