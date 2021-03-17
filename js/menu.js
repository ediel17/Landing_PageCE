(function() {
    var $activeWidth, $defaultMarginLeft, $defaultPaddingLeft, $firstChild, $line, $navListItem;
  
    $line = $('#line');
  
    $navListItem = $('.nav-li');
  
    $activeWidth = $('.active-nav').width();
  
    $firstChild = $('.nav-li:first-child');
  
    $defaultMarginLeft = parseInt($('.nav-li:first-child').next().css('marginLeft').replace(/\D/g, ''));
  
    $defaultPaddingLeft = parseInt($('#nav-container > ul').css('padding-left').replace(/\D/g, ''));
  
    $line.width($activeWidth + 'px');
  
    $line.css('marginLeft', $defaultPaddingLeft + 'px');
  
    $navListItem.click(function() {
      var $activeNav, $currentIndex, $currentOffset, $currentWidth, $initWidth, $marginLeftToSet, $this;
      $this = $(this);
      $activeNav = $('.active-nav');
      $currentWidth = $activeNav.width();
      $currentOffset = $activeNav.position().left;
      $currentIndex = $activeNav.index();
      $activeNav.removeClass('active-nav');
      $this.addClass('active-nav');
      if ($this.is($activeNav)) {
        return 0;
      } else {
        if ($this.index() > $currentIndex) {
          if ($activeNav.is($firstChild)) {
            $initWidth = $defaultMarginLeft + $this.width() + $this.position().left - $defaultPaddingLeft;
          } else {
            $initWidth = $this.position().left + $this.width() - $currentOffset;
          }
          $marginLeftToSet = $this.position().left + $defaultMarginLeft + 'px';
          $line.width($initWidth + 'px');
          return setTimeout(function() {
            $line.css('marginLeft', $marginLeftToSet);
            return $line.width($this.width() + 'px');
          }, 175);
        } else {
          if ($this.is($firstChild)) {
            $initWidth = $currentOffset - $defaultPaddingLeft + $defaultMarginLeft + $currentWidth;
            $marginLeftToSet = $this.position().left;
          } else {
            $initWidth = $currentWidth + $currentOffset - $this.position().left;
            $marginLeftToSet = $this.position().left + $defaultMarginLeft;
          }
          $line.css('marginLeft', $marginLeftToSet);
          $line.width($initWidth + 'px');
          return setTimeout(function() {
            return $line.width($this.width() + 'px');
          }, 175);
        }
      }
    });
  
  }).call(this);
  
  //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLFlBQUEsRUFBQSxrQkFBQSxFQUFBLG1CQUFBLEVBQUEsV0FBQSxFQUFBLEtBQUEsRUFBQTs7RUFBQSxLQUFBLEdBQVEsQ0FBQSxDQUFFLE9BQUY7O0VBQ1IsWUFBQSxHQUFlLENBQUEsQ0FBRSxTQUFGOztFQUNmLFlBQUEsR0FBZSxDQUFBLENBQUUsYUFBRixDQUFnQixDQUFDLEtBQWpCLENBQUE7O0VBQ2YsV0FBQSxHQUFjLENBQUEsQ0FBRSxxQkFBRjs7RUFDZCxrQkFBQSxHQUFxQixRQUFBLENBQVMsQ0FBQSxDQUFFLHFCQUFGLENBQXdCLENBQUMsSUFBekIsQ0FBQSxDQUErQixDQUFDLEdBQWhDLENBQW9DLFlBQXBDLENBQWlELENBQUMsT0FBbEQsQ0FBMEQsS0FBMUQsRUFBaUUsRUFBakUsQ0FBVDs7RUFDckIsbUJBQUEsR0FBc0IsUUFBQSxDQUFTLENBQUEsQ0FBRSxxQkFBRixDQUF3QixDQUFDLEdBQXpCLENBQTZCLGNBQTdCLENBQTRDLENBQUMsT0FBN0MsQ0FBcUQsS0FBckQsRUFBNEQsRUFBNUQsQ0FBVDs7RUFFdEIsS0FBSyxDQUFDLEtBQU4sQ0FBWSxZQUFBLEdBQWUsSUFBM0I7O0VBQ0EsS0FBSyxDQUFDLEdBQU4sQ0FBVSxZQUFWLEVBQXdCLG1CQUFBLEdBQXNCLElBQTlDOztFQUVBLFlBQVksQ0FBQyxLQUFiLENBQW1CLFFBQUEsQ0FBQSxDQUFBO0FBQ25CLFFBQUEsVUFBQSxFQUFBLGFBQUEsRUFBQSxjQUFBLEVBQUEsYUFBQSxFQUFBLFVBQUEsRUFBQSxnQkFBQSxFQUFBO0lBQUMsS0FBQSxHQUFRLENBQUEsQ0FBRSxJQUFGO0lBQ1IsVUFBQSxHQUFhLENBQUEsQ0FBRSxhQUFGO0lBQ2IsYUFBQSxHQUFnQixVQUFVLENBQUMsS0FBWCxDQUFBO0lBQ2hCLGNBQUEsR0FBaUIsVUFBVSxDQUFDLFFBQVgsQ0FBQSxDQUFxQixDQUFDO0lBQ3ZDLGFBQUEsR0FBZ0IsVUFBVSxDQUFDLEtBQVgsQ0FBQTtJQUNoQixVQUFVLENBQUMsV0FBWCxDQUF1QixZQUF2QjtJQUNBLEtBQUssQ0FBQyxRQUFOLENBQWUsWUFBZjtJQUVBLElBQUcsS0FBSyxDQUFDLEVBQU4sQ0FBUyxVQUFULENBQUg7QUFDQyxhQUFPLEVBRFI7S0FBQSxNQUFBO01BSUMsSUFBRyxLQUFLLENBQUMsS0FBTixDQUFBLENBQUEsR0FBZ0IsYUFBbkI7UUFDQyxJQUFHLFVBQVUsQ0FBQyxFQUFYLENBQWMsV0FBZCxDQUFIO1VBQ0MsVUFBQSxHQUFhLGtCQUFBLEdBQXFCLEtBQUssQ0FBQyxLQUFOLENBQUEsQ0FBckIsR0FBcUMsS0FBSyxDQUFDLFFBQU4sQ0FBQSxDQUFnQixDQUFDLElBQXRELEdBQTZELG9CQUQzRTtTQUFBLE1BQUE7VUFHQyxVQUFBLEdBQWEsS0FBSyxDQUFDLFFBQU4sQ0FBQSxDQUFnQixDQUFDLElBQWpCLEdBQXdCLEtBQUssQ0FBQyxLQUFOLENBQUEsQ0FBeEIsR0FBd0MsZUFIdEQ7O1FBS0EsZ0JBQUEsR0FBbUIsS0FBSyxDQUFDLFFBQU4sQ0FBQSxDQUFnQixDQUFDLElBQWpCLEdBQXdCLGtCQUF4QixHQUE2QztRQUVoRSxLQUFLLENBQUMsS0FBTixDQUFZLFVBQUEsR0FBYSxJQUF6QjtlQUNBLFVBQUEsQ0FBWSxRQUFBLENBQUEsQ0FBQTtVQUNYLEtBQUssQ0FBQyxHQUFOLENBQVUsWUFBVixFQUF3QixnQkFBeEI7aUJBQ0EsS0FBSyxDQUFDLEtBQU4sQ0FBWSxLQUFLLENBQUMsS0FBTixDQUFBLENBQUEsR0FBZ0IsSUFBNUI7UUFGVyxDQUFaLEVBR0UsR0FIRixFQVREO09BQUEsTUFBQTtRQWVDLElBQUcsS0FBSyxDQUFDLEVBQU4sQ0FBUyxXQUFULENBQUg7VUFDQyxVQUFBLEdBQWEsY0FBQSxHQUFpQixtQkFBakIsR0FBdUMsa0JBQXZDLEdBQTREO1VBQ3pFLGdCQUFBLEdBQW1CLEtBQUssQ0FBQyxRQUFOLENBQUEsQ0FBZ0IsQ0FBQyxLQUZyQztTQUFBLE1BQUE7VUFJQyxVQUFBLEdBQWEsYUFBQSxHQUFnQixjQUFoQixHQUFpQyxLQUFLLENBQUMsUUFBTixDQUFBLENBQWdCLENBQUM7VUFDL0QsZ0JBQUEsR0FBbUIsS0FBSyxDQUFDLFFBQU4sQ0FBQSxDQUFnQixDQUFDLElBQWpCLEdBQXdCLG1CQUw1Qzs7UUFPQSxLQUFLLENBQUMsR0FBTixDQUFVLFlBQVYsRUFBd0IsZ0JBQXhCO1FBQ0EsS0FBSyxDQUFDLEtBQU4sQ0FBWSxVQUFBLEdBQWEsSUFBekI7ZUFDQSxVQUFBLENBQVksUUFBQSxDQUFBLENBQUE7aUJBQ1gsS0FBSyxDQUFDLEtBQU4sQ0FBWSxLQUFLLENBQUMsS0FBTixDQUFBLENBQUEsR0FBZ0IsSUFBNUI7UUFEVyxDQUFaLEVBRUUsR0FGRixFQXhCRDtPQUpEOztFQVRrQixDQUFuQjtBQVZBIiwic291cmNlc0NvbnRlbnQiOlsiJGxpbmUgPSAkKCcjbGluZScpXG4kbmF2TGlzdEl0ZW0gPSAkKCcubmF2LWxpJylcbiRhY3RpdmVXaWR0aCA9ICQoJy5hY3RpdmUtbmF2Jykud2lkdGgoKVxuJGZpcnN0Q2hpbGQgPSAkKCcubmF2LWxpOmZpcnN0LWNoaWxkJylcbiRkZWZhdWx0TWFyZ2luTGVmdCA9IHBhcnNlSW50KCQoJy5uYXYtbGk6Zmlyc3QtY2hpbGQnKS5uZXh0KCkuY3NzKCdtYXJnaW5MZWZ0JykucmVwbGFjZSgvXFxEL2csICcnKSlcbiRkZWZhdWx0UGFkZGluZ0xlZnQgPSBwYXJzZUludCgkKCcjbmF2LWNvbnRhaW5lciA+IHVsJykuY3NzKCdwYWRkaW5nLWxlZnQnKS5yZXBsYWNlKC9cXEQvZywgJycpKVxuXG4kbGluZS53aWR0aCgkYWN0aXZlV2lkdGggKyAncHgnKVxuJGxpbmUuY3NzKCdtYXJnaW5MZWZ0JywgJGRlZmF1bHRQYWRkaW5nTGVmdCArICdweCcpXG5cbiRuYXZMaXN0SXRlbS5jbGljayAtPlxuXHQkdGhpcyA9ICQodGhpcylcblx0JGFjdGl2ZU5hdiA9ICQoJy5hY3RpdmUtbmF2Jylcblx0JGN1cnJlbnRXaWR0aCA9ICRhY3RpdmVOYXYud2lkdGgoKVxuXHQkY3VycmVudE9mZnNldCA9ICRhY3RpdmVOYXYucG9zaXRpb24oKS5sZWZ0XG5cdCRjdXJyZW50SW5kZXggPSAkYWN0aXZlTmF2LmluZGV4KClcblx0JGFjdGl2ZU5hdi5yZW1vdmVDbGFzcygnYWN0aXZlLW5hdicpXG5cdCR0aGlzLmFkZENsYXNzKCdhY3RpdmUtbmF2JylcblxuXHRpZiAkdGhpcy5pcygkYWN0aXZlTmF2KVxuXHRcdHJldHVybiAwO1xuXG5cdGVsc2UgXG5cdFx0aWYgJHRoaXMuaW5kZXgoKSA+ICRjdXJyZW50SW5kZXhcblx0XHRcdGlmICRhY3RpdmVOYXYuaXMoJGZpcnN0Q2hpbGQpXG5cdFx0XHRcdCRpbml0V2lkdGggPSAkZGVmYXVsdE1hcmdpbkxlZnQgKyAkdGhpcy53aWR0aCgpICsgJHRoaXMucG9zaXRpb24oKS5sZWZ0IC0gJGRlZmF1bHRQYWRkaW5nTGVmdFxuXHRcdFx0ZWxzZVxuXHRcdFx0XHQkaW5pdFdpZHRoID0gJHRoaXMucG9zaXRpb24oKS5sZWZ0ICsgJHRoaXMud2lkdGgoKSAtICRjdXJyZW50T2Zmc2V0XG5cblx0XHRcdCRtYXJnaW5MZWZ0VG9TZXQgPSAkdGhpcy5wb3NpdGlvbigpLmxlZnQgKyAkZGVmYXVsdE1hcmdpbkxlZnQgKyAncHgnXG5cblx0XHRcdCRsaW5lLndpZHRoKCRpbml0V2lkdGggKyAncHgnKVxuXHRcdFx0c2V0VGltZW91dCggLT5cblx0XHRcdFx0JGxpbmUuY3NzKCdtYXJnaW5MZWZ0JywgJG1hcmdpbkxlZnRUb1NldClcblx0XHRcdFx0JGxpbmUud2lkdGgoJHRoaXMud2lkdGgoKSArICdweCcpXG5cdFx0XHQsIDE3NSlcblxuXHRcdGVsc2Vcblx0XHRcdGlmICR0aGlzLmlzKCRmaXJzdENoaWxkKVxuXHRcdFx0XHQkaW5pdFdpZHRoID0gJGN1cnJlbnRPZmZzZXQgLSAkZGVmYXVsdFBhZGRpbmdMZWZ0ICsgJGRlZmF1bHRNYXJnaW5MZWZ0ICsgJGN1cnJlbnRXaWR0aFxuXHRcdFx0XHQkbWFyZ2luTGVmdFRvU2V0ID0gJHRoaXMucG9zaXRpb24oKS5sZWZ0XG5cdFx0XHRlbHNlXG5cdFx0XHRcdCRpbml0V2lkdGggPSAkY3VycmVudFdpZHRoICsgJGN1cnJlbnRPZmZzZXQgLSAkdGhpcy5wb3NpdGlvbigpLmxlZnRcblx0XHRcdFx0JG1hcmdpbkxlZnRUb1NldCA9ICR0aGlzLnBvc2l0aW9uKCkubGVmdCArICRkZWZhdWx0TWFyZ2luTGVmdFxuXG5cdFx0XHQkbGluZS5jc3MoJ21hcmdpbkxlZnQnLCAkbWFyZ2luTGVmdFRvU2V0KVxuXHRcdFx0JGxpbmUud2lkdGgoJGluaXRXaWR0aCArICdweCcpXG5cdFx0XHRzZXRUaW1lb3V0KCAtPlxuXHRcdFx0XHQkbGluZS53aWR0aCgkdGhpcy53aWR0aCgpICsgJ3B4Jylcblx0XHRcdCwgMTc1KSJdfQ==
  //# sourceURL=coffeescript