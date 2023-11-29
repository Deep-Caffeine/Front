/** @jsxImportSource @emotion/react */
import { CSSObject } from '@emotion/react';
import { useState } from 'react';
import Box from '../../../atoms/Box';
import Label from '../../../atoms/Label';
import TextInput from '@/app/atoms/Input';
import Button from '../../../atoms/Button';
import { useAtom } from 'jotai/react';
import useSchool from './useSchool';
import axios from 'axios';
import { SchoolInfo } from './JAtom';
import {
  flexRowCentering,
  flexColumnCentering,
} from '@/app/styles/flex';
import {
  poppinsMediumFontStyle,
  robotoMediumCenterFontStyle,
  poppinsSmallFontStyle,
  robotoLargeFontStyle,
} from '@/app/styles/font';

export default function SchoolForm() {
  const {
    handleName,
    handleDepartment,
    handleStatus,
    handleGrade,

  } = useSchool();

  const [schoolInfo] = useAtom(SchoolInfo);

  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);

  // Check if any field is filled
  const isAnyFieldFilled = () => {
    return (
      schoolInfo.name !== '' ||
      schoolInfo.department !== '' ||
      schoolInfo.status !== '' ||
      schoolInfo.grade !== ''
    );
  };

  const handleSubmit = () => {
    const data = {
      School: schoolInfo.name,
      Department: schoolInfo.department,
      State: schoolInfo.status,
      Grade: schoolInfo.grade !== '' ? parseInt(schoolInfo.grade) : null,
    };

    axios
      .post('http://cloud.swdev.kr:4003/school', data)
      .then((response) => {
        console.log('학교 정보 등록 성공:', response.data);
      })
      .catch((error) => {
        console.error('학교 정보 등록 실패:', error);
      });
  }

  return (
    <div css={wrapperStyle}>
      <div css={headerStyle}>
        <Label css={titleStyle}>학교 정보 입력</Label>
      </div>
      <div css={textStyle}>
        <Label css={textContentStyle}>학교 정보를 입력하시면 더 구체적인 정보를 제공받을 수 있어요.</Label>
      </div>
      <div css={textBoxStyle}>
        <div css={textBoxStyle2}>
          <Label css={subTitleStyle}>학교</Label>
          <TextInput
            css={InputStyle}
            onChange={handleName}
            value={schoolInfo.name}
            placeholder="학교 이름을 입력해주세요."
            width={314}
            height={46}
          />
        </div>
      </div>
      <div css={textBoxStyle}>
        <div css={textBoxStyle2}>
          <Label css={subTitleStyle}>학과</Label>
          <TextInput
            css={InputStyle}
            onChange={handleDepartment}
            value={schoolInfo.department}
            placeholder="학과를 입력해주세요."
            width={314}
            height={46}
          />
        </div>
      </div>
      <div css={textBoxStyle}>
        <div css={textBoxStyle2}>
          <Label css={subTitleStyle}>재학 상태</Label>
          <div css={buttonBoxStyle}>
            <Button
              css={
                selectedStatus === '재학'
                  ? selectedButtonStyle
                  : buttonStyle
              }
              onClick={() => {
                handleStatus('재학');
                setSelectedStatus('재학');
              }}
            >
              재학
            </Button>
            <Button
              css={
                selectedStatus === '휴학'
                  ? selectedButtonStyle
                  : buttonStyle
              }
              onClick={() => {
                handleStatus('휴학');
                setSelectedStatus('휴학');
              }}
            >
              휴학
            </Button>
            <Button
              css={
                selectedStatus === '졸업유예'
                  ? selectedButtonStyle
                  : buttonStyle
              }
              onClick={() => {
                handleStatus('졸업유예');
                setSelectedStatus('졸업유예');
              }}
            >
              졸업유예
            </Button>
            <Button
              css={
                selectedStatus === '졸업'
                  ? selectedButtonStyle
                  : buttonStyle
              }
              onClick={() => {
                handleStatus('졸업');
                setSelectedStatus('졸업');
              }}
            >
              졸업
            </Button>
          </div>
        </div>
      </div>
      {schoolInfo.status === '재학' && (
        <div css={textBoxStyle}>
          <div css={textBoxStyle2}>
            <Label css={subTitleStyle}>학년</Label>
            <div css={buttonBoxStyle}>
              <Button
                css={
                  selectedGrade === '1학년'
                    ? selectedButtonStyle
                    : buttonStyle
                }
                onClick={() => {
                  handleGrade('1학년');
                  setSelectedGrade('1학년');
                }}
              >
                1학년
              </Button>
              <Button
                css={
                  selectedGrade === '2학년'
                    ? selectedButtonStyle
                    : buttonStyle
                }
                onClick={() => {
                  handleGrade('2학년');
                  setSelectedGrade('2학년');
                }}
              >
                2학년
              </Button>
              <Button
                css={
                  selectedGrade === '3학년'
                    ? selectedButtonStyle
                    : buttonStyle
                }
                onClick={() => {
                  handleGrade('3학년');
                  setSelectedGrade('3학년');
                }}
              >
                3학년
              </Button>
              <Button
                css={
                  selectedGrade === '4학년 이상'
                    ? selectedButtonStyle
                    : buttonStyle
                }
                onClick={() => {
                  handleGrade('4학년 이상');
                  setSelectedGrade('4학년 이상');
                }}
              >
                4학년 이상
              </Button>
            </div>
          </div>
        </div>
      )}
      <div css={btnWrapperStyle}>
        <Label>뒤로 가기</Label>
        <Button
          css={isAnyFieldFilled() ? enabledBtnStyle : disabledBtnStyle}
          onClick={handleSubmit}
          disabled={!isAnyFieldFilled()}
        >
          {isAnyFieldFilled() ? '다음' : '건너뛰기'}
        </Button>
      </div>
    </div>
  );
}

const wrapperStyle: CSSObject = {
  position: 'relative',
  width: '480px',
  height: '560px',
  borderRadius: '15px',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
};

const headerStyle: CSSObject = {
  marginTop: '38px',
  ...flexRowCentering,
};

const titleStyle: CSSObject ={
  ...robotoLargeFontStyle,
  width: '145px',
  height: '28px'
}

const textStyle: CSSObject = {
  marginTop: '20px',
  marginBottom: '38px',
  ...flexRowCentering,
};

const textContentStyle: CSSObject = {
  ...poppinsSmallFontStyle,
  fontSize: '12px',
  width: '300px',
  height: '14px'
}

const subTitleStyle: CSSObject = {
  margin: '9px 4px',
  ...poppinsSmallFontStyle,
};

const textBoxStyle: CSSObject = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const textBoxStyle2: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
};

const InputStyle: CSSObject = {
  gap: '30px',
  border: '1px solid #0000001A',
  borderRadius: '10px',
  padding: '0px 0px 0px 22.5px',
  boxSizing: 'border-box',
  ...poppinsMediumFontStyle,
};

const buttonBoxStyle: CSSObject = {
  ...flexRowCentering,
  width: '314px',
  justifyContent: 'space-between',
};

const buttonStyle: CSSObject = {
  gap: '30px',
  width: '70px',
  height: '46px',
  borderRadius: '10px',
  border: '1px solid #0000001A',
  backgroundColor: '#FFFFFF',
  color: '#00000080',
  ...poppinsMediumFontStyle,
  ...flexColumnCentering,
};

const selectedButtonStyle: CSSObject = {
  ...buttonStyle,
  backgroundColor: '#515458',
  color: '#FFFFFF',
};

const enabledBtnStyle: CSSObject = {
  width: '123px',
  height: '40px',
  gap: '8px',
  background: '#3700B3',
  borderRadius: '30px',
  color: '#FFFFFF',
  ...poppinsMediumFontStyle,
  border: '1px solid #0000001A',
  textAlign: 'center',
};

const disabledBtnStyle: CSSObject = {
  width: '123px',
  height: '40px',
  gap: '8px',
  background: '#D9D9D9',
  borderRadius: '30px',
  color: '#FFFFFF',
  ...poppinsMediumFontStyle,
  border: '1px solid #0000001A',
  textAlign: 'center',
};

const btnWrapperStyle: CSSObject = {
  display: 'flex',
  justifyContent: 'space-between',
  gridGap: 'row-gap',
  alignItems: 'center',
  padding: '27px 30px 30px 50px',
  width: '480px',
  boxSizing: 'border-box',
  ...robotoMediumCenterFontStyle,
  position: 'absolute',
  bottom: '0',
};
