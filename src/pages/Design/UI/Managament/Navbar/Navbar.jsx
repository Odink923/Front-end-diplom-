import React, {useContext, useState} from 'react';
import classes from './Navbar.module.css';
import DarkButton from "../../Buttons/DarkButton/DarkButton";
import NavbarButton from "../../Buttons/NavbarButton/NavbarButton";
import {animated, useSpring} from '@react-spring/web'
import {Link, useNavigate} from "react-router-dom";
import {Context} from "../../../../../index";
import {observer} from "mobx-react-lite";
import {login, logout} from "../../../../../http/userAPI";

const Navbar = () => {
    const {user} = useContext(Context);
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const slideAnimation = useSpring({
        height: isHovered ? '410' : '0px',
        overflow: 'hidden',
    });
    const slideAnimationNavbar = useSpring({
        borderRadius: isHovered ? '5px' : '50px',
        overflow: 'hidden',

    });
    const lineAnimation = useSpring({
        width: isHovered ? '100%' : '0%',
        config: { duration: 1000 },
    });
    const logOut = () => {
        user.setUser({})
        logout();
        user.setIsAuth(false)
    }

    return (
            <div className={classes.component}>
                <animated.div className={classes.overlapGroup} style={slideAnimationNavbar}>
                    <div className={classes.overlapGroupFrame}>
                        <div className={classes.div}>
                            <Link to={"/"}>
                                <div className={classes.logo}>
                                    <svg width="151" height="18" viewBox="0 0 151 18" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M34.8251 12.2876C34.7143 13.3608 34.3235 14.3028 33.6586 15.1197C32.9937 15.9365 32.1422 16.5745 31.0982 17.0276C30.0542 17.4867 28.8819 17.7132 27.5813 17.7132C26.1407 17.7132 24.8634 17.439 23.7611 16.8964C22.653 16.3539 21.7956 15.5966 21.1774 14.6188C20.5591 13.647 20.2559 12.5201 20.2559 11.2502C20.2559 9.98022 20.565 8.85336 21.1774 7.88151C21.7956 6.90967 22.653 6.15246 23.7611 5.60394C24.8693 5.06137 26.1407 4.78711 27.5813 4.78711C28.8819 4.78711 30.0542 5.01367 31.0982 5.47277C32.1422 5.93186 32.9937 6.56386 33.6586 7.37472C34.3235 8.18559 34.7143 9.13358 34.8251 10.2187H30.9408C30.7891 9.43169 30.4042 8.82951 29.7976 8.41811C29.191 8.00076 28.4503 7.79804 27.5813 7.79804C26.8931 7.79804 26.2982 7.93517 25.7849 8.20347C25.2717 8.47177 24.8809 8.87124 24.601 9.384C24.321 9.89675 24.181 10.5228 24.181 11.2502C24.181 11.9776 24.321 12.6036 24.601 13.1164C24.8809 13.6291 25.2775 14.0226 25.7849 14.2969C26.2982 14.5711 26.8931 14.7023 27.5813 14.7023C28.462 14.7023 29.2027 14.4817 29.8093 14.0465C30.41 13.6112 30.7891 13.021 30.9408 12.2757H34.8251V12.2876Z"
                                            fill="#2D3361"/>
                                        <path
                                            d="M35.332 8.10359V6.36261L37.8108 5.43847L39.4905 1.87305H41.7185V5.13439H46.886V8.09762H41.7185V12.1341C41.7185 13.0522 41.8993 13.6902 42.2667 14.0539C42.6283 14.4176 43.2815 14.6024 44.2206 14.6024C44.8213 14.6024 45.352 14.5488 45.807 14.4414C46.2619 14.3341 46.6935 14.1851 47.0959 14.0002V17.0291C46.676 17.202 46.1277 17.357 45.4454 17.5001C44.763 17.6432 44.0631 17.7147 43.334 17.7147C42.0626 17.7147 41.0128 17.506 40.1962 17.0946C39.3797 16.6773 38.7731 16.099 38.3882 15.3477C38.0033 14.5965 37.8108 13.7141 37.8108 12.6945V8.10359H35.332Z"
                                            fill="#2D3361"/>
                                        <path
                                            d="M60.4231 11.256C60.2131 12.5558 59.8165 13.6946 59.2275 14.6605C58.6384 15.6264 57.8977 16.3776 56.9995 16.9142C56.1013 17.4508 55.0982 17.7191 53.9783 17.7191C52.8002 17.7191 51.7679 17.4448 50.8814 16.9023C49.9948 16.3597 49.2949 15.6025 48.7934 14.6366C48.2918 13.6707 48.0352 12.5439 48.0352 11.256C48.0352 9.96819 48.2859 8.84133 48.7934 7.87545C49.2949 6.90956 49.9948 6.15832 50.8814 5.6098C51.7679 5.06723 52.8002 4.79297 53.9783 4.79297C55.1565 4.79297 56.1072 5.06127 56.9995 5.59787C57.8977 6.13447 58.6384 6.87975 59.2333 7.83967C59.8282 8.79959 60.2248 9.93838 60.4173 11.2501L60.4231 11.256ZM51.9837 11.256C51.9837 11.9119 52.1178 12.4962 52.3803 13.003C52.6486 13.5098 53.016 13.9092 53.4826 14.2073C53.9492 14.4995 54.4916 14.6485 55.1098 14.6485C55.728 14.6485 56.3113 14.4995 56.8654 14.2073C57.4194 13.9152 57.9035 13.5157 58.3235 13.003C58.7434 12.4962 59.0583 11.9119 59.2683 11.256C59.0583 10.6002 58.7434 10.0159 58.3235 9.5091C57.9035 9.00231 57.4194 8.60284 56.8654 8.30473C56.3113 8.01258 55.728 7.86352 55.1098 7.86352C54.4916 7.86352 53.9492 8.01258 53.4826 8.30473C53.016 8.59688 52.6486 8.99635 52.3803 9.5091C52.112 10.0159 51.9837 10.6002 51.9837 11.256ZM59.4608 17.3733L58.9359 12.9314L59.5016 11.256L58.9359 9.6045L59.4608 5.13878H63.5143L62.7794 11.256L63.5143 17.3733H59.4608Z"
                                            fill="#2D3361"/>
                                        <path
                                            d="M75.5807 9.67014L75.814 9.15738C77.0855 9.16931 78.1178 9.36606 78.8994 9.74765C79.6809 10.1292 80.2583 10.636 80.6199 11.274C80.9815 11.9119 81.1681 12.6155 81.1681 13.3906C81.1681 14.2372 80.9698 14.9825 80.5674 15.6324C80.1708 16.2823 79.5817 16.795 78.8119 17.1647C78.042 17.5343 77.0913 17.7251 75.954 17.7251H66.0215L67.2579 9.46146L66.0215 1.62708H75.5982C77.0563 1.62708 78.1703 1.97289 78.946 2.67047C79.7217 3.36805 80.1125 4.31008 80.1125 5.51446C80.1125 6.14645 79.9608 6.76056 79.6634 7.36871C79.3601 7.97686 78.8819 8.48961 78.2228 8.91293C77.5637 9.33625 76.6831 9.58667 75.5749 9.6761L75.5807 9.67014ZM68.0453 17.0514L67.2871 16.0438H75.8549C76.893 16.0438 77.6979 15.8053 78.2811 15.3223C78.8644 14.8454 79.1502 14.1537 79.1502 13.2534C79.1502 12.2935 78.806 11.5602 78.1236 11.0415C77.4354 10.5287 76.4206 10.2664 75.0792 10.2664H68.2786V8.63271H74.9742C75.8724 8.63271 76.6131 8.38229 77.208 7.88146C77.8029 7.38064 78.1003 6.65324 78.1003 5.69332C78.1003 4.98978 77.8612 4.4174 77.3771 3.96427C76.893 3.51114 76.1815 3.29054 75.2483 3.29054H67.2929L68.0512 2.28292L69.1826 9.44953L68.0512 17.0454L68.0453 17.0514Z"
                                            fill="#2D3361"/>
                                        <path
                                            d="M84.6087 3.80924C84.218 3.80924 83.8855 3.68403 83.6114 3.43362C83.3373 3.18321 83.2031 2.86721 83.2031 2.47966C83.2031 2.09212 83.3373 1.794 83.6114 1.54359C83.8855 1.29318 84.218 1.16797 84.6087 1.16797C85.0287 1.16797 85.3728 1.29318 85.6352 1.54359C85.8977 1.794 86.0318 2.10404 86.0318 2.47966C86.0318 2.85528 85.8977 3.18321 85.6352 3.43362C85.3728 3.68403 85.0287 3.80924 84.6087 3.80924ZM83.6639 5.59195L84.6321 5.76485L85.6002 5.59195V17.7191H83.6697V5.59195H83.6639Z"
                                            fill="#2D3361"/>
                                        <path
                                            d="M95.0203 17.9992C93.6322 17.9992 92.4132 17.7369 91.3575 17.2062C90.3019 16.6756 89.4795 15.9303 88.8905 14.9764C88.3014 14.0164 88.0098 12.9134 88.0098 11.6733C88.0098 10.4331 88.3014 9.31224 88.8905 8.3702C89.4795 7.42817 90.3019 6.68885 91.3575 6.15821C92.4132 5.62757 93.638 5.36523 95.0203 5.36523C96.4025 5.36523 97.6448 5.62757 98.6947 6.15821C99.7445 6.68885 100.567 7.42221 101.162 8.3702C101.757 9.31224 102.054 10.4153 102.054 11.6733C102.054 12.9313 101.757 14.0224 101.162 14.9764C100.567 15.9363 99.7445 16.6816 98.6947 17.2062C97.6448 17.7309 96.42 17.9992 95.0203 17.9992ZM95.0203 16.3477C96.0584 16.3477 96.9508 16.1569 97.709 15.7813C98.4672 15.3997 99.0504 14.8631 99.4645 14.1595C99.8786 13.456 100.083 12.6272 100.083 11.6673C100.083 10.7074 99.8786 9.9025 99.4645 9.19895C99.0504 8.49541 98.4672 7.95285 97.709 7.5653C96.9508 7.17775 96.0584 6.98696 95.0203 6.98696C93.9821 6.98696 93.1073 7.17775 92.3432 7.5653C91.5792 7.95285 90.9959 8.49541 90.5877 9.19895C90.1794 9.9025 89.9811 10.7253 89.9811 11.6673C89.9811 12.6094 90.1852 13.456 90.5877 14.1595C90.9959 14.8631 91.5792 15.3997 92.3432 15.7813C93.1073 16.1628 93.9996 16.3477 95.0203 16.3477Z"
                                            fill="#2D3361"/>
                                        <path
                                            d="M103.926 5.63374H105.856L106.527 9.73576V17.7192H104.596V9.45554L103.926 5.63374ZM111.42 5.35352C112.529 5.35352 113.462 5.58008 114.232 6.02725C115.001 6.48038 115.591 7.13026 115.993 7.98286C116.395 8.83546 116.6 9.86097 116.6 11.0653V17.7192H114.669V11.4112C114.669 9.96829 114.342 8.8772 113.695 8.13788C113.042 7.39856 112.097 7.03487 110.849 7.03487C109.98 7.03487 109.222 7.23758 108.568 7.63705C107.915 8.03652 107.414 8.59101 107.058 9.30052C106.702 10.01 106.521 10.8328 106.521 11.7808L105.745 11.2204C105.845 10.016 106.142 8.97856 106.649 8.10807C107.151 7.23758 107.816 6.55789 108.632 6.08091C109.449 5.60393 110.376 5.35948 111.415 5.35948L111.42 5.35352Z"
                                            fill="#2D3361"/>
                                        <path
                                            d="M120.513 3.80924C120.122 3.80924 119.79 3.68403 119.516 3.43362C119.242 3.18321 119.107 2.86721 119.107 2.47966C119.107 2.09212 119.242 1.794 119.516 1.54359C119.79 1.29318 120.122 1.16797 120.513 1.16797C120.933 1.16797 121.277 1.29318 121.54 1.54359C121.802 1.794 121.936 2.10404 121.936 2.47966C121.936 2.85528 121.802 3.18321 121.54 3.43362C121.277 3.68403 120.933 3.80924 120.513 3.80924ZM119.568 5.59195L120.536 5.76485L121.505 5.59195V17.7191H119.574V5.59195H119.568Z"
                                            fill="#2D3361"/>
                                        <path
                                            d="M137.183 13.1283C137.031 14.0882 136.646 14.9289 136.04 15.6622C135.433 16.3896 134.657 16.962 133.718 17.3794C132.779 17.7967 131.747 17.9994 130.61 17.9994C129.291 17.9994 128.131 17.7311 127.122 17.1945C126.113 16.6579 125.325 15.9126 124.76 14.9646C124.194 14.0107 123.908 12.9136 123.908 11.6675C123.908 10.4214 124.194 9.32437 124.76 8.37041C125.325 7.41645 126.113 6.67713 127.122 6.14649C128.131 5.61585 129.291 5.35352 130.61 5.35352C131.741 5.35352 132.779 5.55623 133.718 5.96763C134.657 6.37306 135.427 6.94543 136.04 7.67283C136.646 8.40022 137.031 9.25282 137.183 10.2247H135.188C134.978 9.22301 134.459 8.43003 133.625 7.85169C132.791 7.27336 131.788 6.98121 130.61 6.98121C129.659 6.98121 128.831 7.172 128.119 7.55954C127.413 7.94709 126.865 8.48369 126.469 9.18127C126.078 9.87885 125.88 10.7016 125.88 11.6616C125.88 12.6215 126.078 13.4502 126.469 14.1538C126.859 14.8573 127.408 15.3939 128.119 15.7755C128.825 16.1571 129.653 16.3419 130.61 16.3419C131.799 16.3419 132.808 16.0498 133.642 15.4595C134.476 14.8752 134.99 14.0942 135.188 13.1223H137.183V13.1283Z"
                                            fill="#2D3361"/>
                                        <path
                                            d="M150.999 14.1775C150.999 14.9526 150.772 15.6204 150.317 16.1928C149.862 16.7652 149.197 17.2123 148.322 17.5224C147.447 17.8324 146.386 17.9934 145.144 17.9934C143.901 17.9934 142.746 17.8085 141.772 17.4449C140.798 17.0812 140.04 16.5684 139.492 15.9126C138.944 15.2567 138.652 14.4876 138.611 13.6171H140.583C140.664 14.1775 140.909 14.6664 141.318 15.0898C141.726 15.5131 142.257 15.835 142.916 16.0676C143.575 16.2941 144.321 16.4134 145.161 16.4134C146.38 16.4134 147.337 16.2226 148.025 15.847C148.719 15.4654 149.063 14.9467 149.063 14.2908C149.063 13.7781 148.841 13.3905 148.392 13.1401C147.943 12.8897 147.109 12.6989 145.896 12.5737L143.61 12.3352C142.478 12.2219 141.568 12.0073 140.892 11.7032C140.215 11.3932 139.725 11.0116 139.434 10.5465C139.142 10.0815 138.99 9.56277 138.99 8.9904C138.99 8.20338 139.224 7.54157 139.696 7.00497C140.163 6.46837 140.822 6.06294 141.662 5.78271C142.502 5.50249 143.476 5.36536 144.578 5.36536C145.756 5.36536 146.8 5.53826 147.716 5.87811C148.631 6.22392 149.366 6.7009 149.909 7.31501C150.457 7.92912 150.754 8.63863 150.813 9.43757H148.859C148.789 8.97847 148.579 8.56112 148.229 8.17953C147.879 7.79795 147.395 7.49388 146.771 7.26731C146.147 7.04075 145.383 6.9215 144.473 6.9215C143.353 6.9215 142.484 7.08844 141.86 7.41637C141.236 7.74429 140.927 8.22723 140.927 8.85327C140.927 9.31236 141.131 9.67606 141.533 9.95032C141.936 10.2246 142.659 10.4154 143.697 10.5287L146.298 10.8089C147.488 10.9222 148.427 11.1249 149.11 11.4111C149.792 11.6973 150.282 12.0669 150.568 12.526C150.853 12.9851 150.999 13.5336 150.999 14.1775Z"
                                            fill="#2D3361"/>
                                        <path
                                            d="M6.4375 15.5868L7.14322 14.919C7.80227 15.0859 8.49633 15.1694 9.2312 15.1694C13.3197 15.1694 16.1717 12.5043 16.1717 8.68249C16.1717 7.97895 16.0784 7.31118 15.8918 6.69111L16.72 5.91602V11.5026L12.3807 15.5868H6.44917H6.4375Z"
                                            fill="#2D3361"/>
                                        <path
                                            d="M16.7384 3.46484L13.7872 6.24325C14.1896 6.92294 14.4229 7.73977 14.4229 8.68777C14.4229 11.6808 12.1775 13.386 9.23213 13.386C8.31062 13.386 7.45909 13.2191 6.71838 12.8971L3.68555 15.753L5.41193 17.3747H13.0582L18.4648 12.283V5.08657L16.7384 3.46484Z"
                                            fill="#2D3361"/>
                                        <path
                                            d="M1.75 11.5016V5.8732L6.08928 1.78906H12.1666L11.4259 2.48664C10.7377 2.29585 10.0028 2.20046 9.23293 2.20046C5.15027 2.20046 2.29241 4.86558 2.29241 8.68737C2.29241 9.43265 2.39739 10.1302 2.60736 10.7861L1.79666 11.5492L1.75 11.5016Z"
                                            fill="#2D3361"/>
                                        <path
                                            d="M13.0587 0H5.41244L0 5.09175V12.2882L1.79637 13.9815L4.72422 11.2209C4.28679 10.5293 4.036 9.68268 4.036 8.68698C4.036 5.67605 6.29312 3.98874 9.22681 3.98874C10.1833 3.98874 11.0698 4.17357 11.8339 4.5313L14.8492 1.69328L13.0528 0L13.0587 0Z"
                                            fill="#2D3361"/>
                                    </svg>
                                </div>
                            </Link>
                            <div className={classes.frame2}>
                                <Link to={"/patient"}>
                                <NavbarButton property1={"Пацієнтам"}/>
                                </Link>
                                <Link to={"/aboutUsPage"}>
                                    <NavbarButton property1={"Про нас"}
                                                  onHover={() => setIsHovered(true)}
                                                  onMouseLeave={() => setIsHovered(false)}
                                    />
                                </Link>
                                <NavbarButton property1={"Блог"}/>
                                <NavbarButton property1={"FAQ"}/>
                            </div>
                        </div>
                    </div>

                    <animated.div className={classes.dropdownMenu} style={slideAnimation}
                                  onMouseEnter={() => setIsHovered(true)}
                                  onMouseLeave={() => setIsHovered(false)}>
                        <animated.div className={classes.line} style={lineAnimation}></animated.div>
                        <div className={classes.dropdownFrame}>
                            <div className={classes.dropdownMenuBlock}>
                                <div className={`${classes.dropdownMenuImage} ${classes.img1 }`} ></div>
                                <Link to={"/protezPage"}>
                                    <div className={classes.dropdownMenuText}>Біонічна рука</div>
                                </Link>
                            </div>
                            <div className={classes.dropdownMenuBlock}>
                                <div className={`${classes.dropdownMenuImage} ${classes.img2 }`}></div>
                                <div className={classes.dropdownMenuText}>Послуги</div>
                            </div>
                            <div className={classes.dropdownMenuBlock}>
                                <div className={`${classes.dropdownMenuImage} ${classes.img3 }`}></div>
                                <div className={classes.dropdownMenuText}>Команда</div>
                            </div>
                            <div className={classes.dropdownMenuBlock}>
                                <div className={`${classes.dropdownMenuImage} ${classes.img4 }`}></div>
                                <div className={classes.dropdownMenuText}>Партнери</div>
                            </div>
                        </div>
                    </animated.div>
                </animated.div>
                <div className={classes.overlap}>
                    <div className={classes.frame3}>
                        <div className={classes.ENG}>
                            <span className={classes.span}>ENG/</span>
                            <span className={classes.textWrapper4}>УКР</span>
                        </div>

                        {user.isAuth ?
                            <span onClick={() => logOut()} className={classes.textWrapper5}>{`Вихід`}</span> :
                            <span onClick={() => navigate('/login')} className={classes.textWrapper5}>{`Увійти`}</span>
                        }
                        <DarkButton property1="Напишіть нам"></DarkButton>
                    </div>
                </div>
            </div>
    );
};

export default observer(Navbar);