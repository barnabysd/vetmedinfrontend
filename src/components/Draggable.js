import React, {useState, useCallback, useMemo, useEffect} from 'react';

const POSITION = {x: 0, y: 0};

const Draggable = ({children, id, onDrag, onDragEnd}) => {
  const [state, setState] = useState({
    isDragging: false,
    origin: POSITION,
    translation: POSITION
  });
	
  const handleMouseDown = useCallback(({clientX, clientY}) => {
    setState(state => ({
      ...state,
      isDragging: true,
      origin: {x: clientX, y: clientY}
    }));
  }, []);
	
  const handleMouseMove = useCallback(({clientX, clientY}) => {
    const translation = {x: clientX - state.origin.x, y: clientY - state.origin.y};
		
    setState(state => ({
      ...state,
      translation
    }));
    const xOffset = 21
    const yOffset = 70
    const heightOf = 696 
    const leftPos = (translation.x ? (1*(translation.x)) + xOffset: 1)
    const topPos = (translation.y ? heightOf + (1*(translation.y)) : 1)
    console.log("left:'" + leftPos  +"px', top:'" + topPos + "px'")
    onDrag({translation, id});
  }, [state.origin, onDrag, id]);
	
  const handleMouseUp = useCallback(() => {
    setState(state => ({
      ...state,
      isDragging: false
    }));
   

  

    onDragEnd();
  }, [onDragEnd]);
	
  useEffect(() => {
    if (state.isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);

      setState(state => ({...state, translation: {x: 0, y: 0}}));
    }
  }, [state.isDragging, handleMouseMove, handleMouseUp]);
	
  const styles = useMemo(() => ({
  
    cursor: state.isDragging ? '-webkit-grabbing' : '-webkit-grab',
    transform: `translate(${state.translation.x}px, ${state.translation.y}px)`,
    transition: state.isDragging ? 'none' : 'transform 500ms',
    zIndex: state.isDragging ? 2 : 1,
    position: state.isDragging ? 'absolute' : 'relative'
  }), [state.isDragging, state.translation]);
	
  return (
    <div style={styles} onMouseDown={handleMouseDown}>
      {children}
    </div>
  );
};

export default Draggable;