import {
  Address,
  ButtonWrapper,
  Contents,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  UploadButton,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
} from "../../../styles/boardsNew";

/*
  To do
  1. 아이디 or 비밀번호를 올바르게 입력 안했을 때 문구 발생하도록 하기(span or div 등등)
*/
import { useForm } from "react-hook-form";

export default function BoardsNewPage() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm();
  // const onSubmit = (data) => console.log(data);
  const onSubmit = (data) => alert("게시글이 등록되었습니다.");
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <Title>게시글 등록</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer
              type="text"
              placeholder="이름을 적어주세요."
              aria-invalid={
                isSubmitted ? (errors.Writer ? "true" : "false") : undefined
              }
              {...register("Writer", {
                required: "작성자는 필수 입니다.",
              })}
            />
            <br></br>
            {errors.Writer && (
              <small role="alert">{errors.Writer.message}</small>
            )}
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Password
              type="password"
              placeholder="비밀번호를 작성해주세요."
              {...register("Password", {
                required: "패스워드는 필수입니다.",
                minLength: {
                  value: 8,
                  message: "8자리 이상 비밀번호를 입력해주세요.",
                },
              })}
            />
            <br></br>
            {errors.Password && (
              <small role="alert">{errors.Password.message}</small>
            )}
          </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Subject
            type="text"
            placeholder="제목을 작성해주세요."
            {...register("Subject", {
              required: "제목 작성은 필수입니다.",
            })}
          />
        </InputWrapper>
        <br></br>
        {errors.Subject && <small role="alert">{errors.Subject.message}</small>}
        <InputWrapper>
          <Label>내용</Label>
          <Contents
            placeholder="내용을 작성해주세요."
            {...register("Contents", {
              required: "내용 작성은 필수입니다.",
            })}
          />
        </InputWrapper>
        {errors.Contents && (
          <small role="alert">{errors.Contents.message}</small>
        )}
        <InputWrapper>
          <Label>주소</Label>
          <ZipcodeWrapper>
            <Zipcode placeholder="07250" />
            <SearchButton>우편번호 검색</SearchButton>
          </ZipcodeWrapper>
          <Address />
          <Address />
        </InputWrapper>
        <InputWrapper>
          <Label>유튜브</Label>
          <Youtube placeholder="링크를 복사해주세요." />
        </InputWrapper>
        <ImageWrapper>
          <Label>사진첨부</Label>
          <UploadButton>+</UploadButton>
          <UploadButton>+</UploadButton>
          <UploadButton>+</UploadButton>
        </ImageWrapper>
        <OptionWrapper>
          <Label>메인설정</Label>
          <RadioButton
            type="radio"
            id="youtube"
            name="radio-button"
            {...register("RadioButton", {
              required: "하나는 체크하셔야 합니다.",
            })}
          />
          <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
          <RadioButton
            type="radio"
            id="image"
            name="radio-button"
            {...register("RadioButton", {
              required: "하나는 체크하셔야 합니다.",
            })}
          />
          <RadioLabel htmlFor="image">사진</RadioLabel>
        </OptionWrapper>
        <br></br>
        {errors.RadioButton && (
          <small role="alert">{errors.RadioButton.message}</small>
        )}
        <ButtonWrapper>
          <SubmitButton>등록하기</SubmitButton>
        </ButtonWrapper>
      </Wrapper>
    </form>
  );
}
